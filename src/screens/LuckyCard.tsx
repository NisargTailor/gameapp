//import liraries
import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Images} from '../assets';
import {Header, Modal} from '../components';
import {
  ThemeInterface,
  WinAlertPrors,
  boxCardInterface,
  closeAlertProps,
} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';
import {useOrientation} from '../utils/useOrientation';

// create a component
const LuckyCard = () => {
  const [selectedValue, SetSelectedValue] = useState<any>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [closeAlert, SetCloseAlert] = useState<closeAlertProps>({});
  const [isCloseModal, SetIsCloseModal] = useState<boolean>(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [styles] = useThemeHook(Styles);
  const orientation = useOrientation();
  const cardData = [
    {id: 1, value: '66', name: 'card1'},
    {id: 2, value: '45', name: 'card2'},
    {id: 3, value: '76', name: 'card3'},
  ];
  const onBackPress = () => {
    SetCloseAlert({
      Title: 'Warning',
      Message: 'Are you want to close this game?',
      buttonText: 'close',
    });
    SetIsCloseModal(true);
  };
  const onCloseModalPress = () => {
    SetIsCloseModal(false);
    Navigation.goBack();
  };
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };
  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const onCardPress = (item: boxCardInterface) => {
    SetSelectedValue(item);
    WinAlert(item);
    flipToFront();
  };
  const WinAlert = (item: boxCardInterface) => {
    SetWinAlert({
      Title: '🎉 Congratulations 🎉',
      Message: ` Congratulations you win $${item.value} USD Please Claim Your 🎁 gift!`,
    });
    SetIsWinModal(true);
    flipAnimation.resetAnimation();
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Lucky Cards" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congratulations !</Text>
          {/* <Text style={styles.subTitleText}>Select your lucky card!</Text> */}
        </View>
        <Animated.View style={{...styles.bodyContainer}}>
          {cardData.map(item => {
            return (
              <TouchableOpacity key={item.id} onPress={() => onCardPress(item)}>
                {selectedValue.id === item.id ? (
                  <Animated.Image
                    source={Images.white_card}
                    style={{...styles.image, ...flipToFrontStyle}}
                  />
                ) : (
                  <Image
                    source={Images.card}
                    style={
                      orientation === 'PORTRAIT' ? styles.imagePT : styles.image
                    }
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </Animated.View>
        <View style={styles.footerContainer}>
          <Text style={styles.subTitleText}>
            click one of the card to win the price!
          </Text>
        </View>
      </View>
      <Modal
        visible={isWinModal}
        type="spin-win"
        title={winAlert.Title}
        message={winAlert.Message}
        onClosePress={onWinModelClosePress}
      />
      <Modal
        visible={isCloseModal}
        type="two-button"
        title={closeAlert.Title}
        message={closeAlert.Message}
        buttonText="Ok"
        onClosePress={onCloseModalPress}
      />
    </SafeAreaView>
  );
};

// define your styles
const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    TitleText: {
      fontSize: 24,
      color: theme.color.textPrimary,
    },
    subTitleText: {
      fontSize: 12,
      color: theme.color.textPrimary,
    },
    bodyContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: Dimensions.get('window').width / 7,
      height: Dimensions.get('window').width / 4,
      resizeMode: 'stretch',
      margin: 5,
    },
    imagePT: {
      width: 100,
      height: 200,
      resizeMode: 'stretch',
      margin: 5,
    },
    footerContainer: {
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyCard;
