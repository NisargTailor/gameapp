import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScratchCard} from 'rn-scratch-card';
import {Images} from '../assets';
import {Header, Modal} from '../components';
import {ThemeInterface, WinAlertPrors} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';
const ScratchNWin = () => {
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [isScratched, SetIsScreatch] = useState<boolean>(false);
  const [styles] = useThemeHook(Styles);

  const onBackPress = () => {
    Navigation.goBack();
  };

  const handleScratch = (scratchPercentage: number) => {
    if (scratchPercentage >= 55) {
      SetIsScreatch(true);
      SetWinAlert({
        Title: `🎉 Congratulations 🎉`,
        Message: ` Congratulations you win $100USD Please Clame Your 🎁 gift!`,
      });
      //   SetIsWinModal(true);
    }
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Scratch & Win" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          {/* <Text style={styles.subTitleText}>Here is your scratch card</Text> */}
        </View>
        <View style={styles.cardContainer}>
          {!isScratched && (
            <ScratchCard
              source={Images.card_forground}
              brushWidth={50}
              onScratch={handleScratch}
              style={styles.scratch_card}
            />
          )}
          <Image
            source={Images.card_background}
            style={styles.background_view}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.subTitleText}>
            Scratch the above card by swiming on it
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

const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
    },
    container: {
      flex: 1,
      // flexDirection: 'row',
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    TitleText: {
      fontSize: 24,
      color: theme.color.textPrimary,
    },
    subTitleText: {
      fontSize: 12,
      color: theme.color.textPrimary,
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background_view: {
      position: 'absolute',
      zIndex: -1000,
      flex: 1,
      height: 200,
      width: 200,
      resizeMode: 'stretch',
      backgroundColor: 'transparent',
    },
    scratch_card: {
      height: 200,
      width: 200,
      resizeMode: 'stretch',
      backgroundColor: 'transparent',
    },
    footerContainer: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default ScratchNWin;
