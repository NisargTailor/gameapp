//import liraries
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets';
import {Header, Modal} from '../components';
import {ThemeInterface, WinAlertPrors, boxCardInterface} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';

// create a component
const LuckyCard = () => {
  const [selectedValue, SetSelectedValue] = useState<any>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles] = useThemeHook(Styles);
  const cardData = [
    {id: 1, value: '66', name: 'card1'},
    {id: 2, value: '45', name: 'card2'},
    {id: 3, value: '76', name: 'card3'},
  ];
  const onBackPress = () => {
    Navigation.goBack();
  };

  const onCardPress = (item: boxCardInterface) => {
    SetSelectedValue(item);
    WinAlert(item);
  };
  const WinAlert = (item: boxCardInterface) => {
    SetWinAlert({
      Title: `🎉 Congratulations 🎉`,
      Message: ` Congratulations you win $${item.value} USD Please Clame Your 🎁 gift!`,
    });
    SetIsWinModal(true);
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Lucky Box" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          {/* <Text style={styles.subTitleText}>Select your lucky card!</Text> */}
        </View>
        <View style={styles.bodyContainer}>
          {cardData.map(item => {
            return (
              <TouchableOpacity key={item.id} onPress={() => onCardPress(item)}>
                <Image source={Images.card} style={styles.image} />
              </TouchableOpacity>
            );
          })}
        </View>
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
    footerContainer: {
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyCard;
