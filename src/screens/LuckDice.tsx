//import liraries
import React, {useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header, Modal} from '../components';
import DiceAnimation from '../components/DiceRoll';
import {ThemeInterface, WinAlertPrors, boxCardInterface} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';

// create a component
const LuckyDice = () => {
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles] = useThemeHook(Styles);
  const onBackPress = () => {
    Navigation.goBack();
  };

  const onDiceChage = (number: number) => {
    console.log('number', number);
    let item = {id: number, value: `${number}`, name: `${number}`};
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
      <Header title="Lucky Dice" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          <Text style={styles.subTitleText}>Select your lucky card!</Text>
        </View>
        <View style={styles.bodyContainer}>
          <DiceAnimation onDiceChange={onDiceChage} />
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
      paddingBottom: 30,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    TitleText: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.color.textPrimary,
    },
    subTitleText: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: '500',
      color: theme.color.textSecondary,
    },
    bodyContainer: {
      flex: 1,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: Dimensions.get('screen').width / 3 - 10,
      height: Dimensions.get('screen').width,
      resizeMode: 'contain',
    },
    footerContainer: {
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyDice;
