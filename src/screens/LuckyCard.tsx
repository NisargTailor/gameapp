//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  FlatList,
} from 'react-native';
import RNShake from 'react-native-shake';
import {ThemeInterface, WinAlertPrors, boxCardInterface} from '../constant';
import {scale, Navigation} from '../utils';
import {useThemeHook} from '../hook';
import {Header, Modal, BoxCard} from '../components';
import {Images} from '../assets';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const CARD_SIZE = Dimensions.get('screen').width / 1.4;

// create a component
const LuckyCard = () => {
  const [selectedValue, SetSelectedValue] = useState<any>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles, theme] = useThemeHook(Styles);
  const cardData = [
    {id: 1, value: '66', name: 'card1'},
    {id: 2, value: '45', name: 'card2'},
    {id: 3, value: '76', name: 'card3'},
  ];
  const onBackPress = () => {
    Navigation.goBack();
  };

  const onCardPress = (item: boxCardInterface) => {
    console.log('===>', item);
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
          <Text style={styles.subTitleText}>Select your lucky card!</Text>
        </View>
        <View style={styles.bodyContainer}>
          {cardData.map(() => {
            return (
              <Image source={Images.card} style={styles.image} />
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
      backgroundColor: theme.color.backgroud,
      paddingBottom: scale(30),
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(20),
    },
    TitleText: {
      fontSize: scale(24),
      fontWeight: '600',
      color: theme.color.textPrimary,
    },
    subTitleText: {
      marginTop: scale(10),
      fontSize: scale(16),
      fontWeight: '500',
      color: theme.color.textSecondary,
    },
    bodyContainer: {
      flex:1,
      flexDirection:'row',
      padding: scale(10),
      backgroundColor:'red'
    },
    image: {
      width:'33.33%',
      height:'30%',
      resizeMode:'contain'
    },
    footerContainer: {
      paddingVertical: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyCard;
