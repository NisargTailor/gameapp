import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Modal} from '../components';
import {ThemeInterface, WinAlertPrors} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation, scale} from '../utils';
import {ScratchCard} from 'rn-scratch-card';
import {Images} from '../assets';
import {Color} from '../theme';
const CARD_SIZE = Dimensions.get('screen').width / 1.4;
const ScratchNWin = () => {
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [isScratched, SetIsScreatch] = useState<boolean>(false);
  const [styles, theme] = useThemeHook(Styles);

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
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Scratch & Win" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          <Text style={styles.subTitleText}>Here is your scratch card</Text>
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
        <Text style={styles.subTitleText}>Scratch the above card by swiming on it</Text>
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
      backgroundColor: theme.color.backgroud,
      paddingBottom: scale(30),
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:scale(20)
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
    cardContainer: {
      marginTop: scale(20),
      width: CARD_SIZE,
      height: CARD_SIZE,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    background_view: {
      zIndex: -120,
      position: 'absolute',
      width: CARD_SIZE,
      height: CARD_SIZE,
      backgroundColor: 'transparent',
      borderRadius: 16,
    },
    scratch_card: {
      width: CARD_SIZE,
      height: CARD_SIZE,
      backgroundColor: 'transparent',
    },
    footerContainer: {
        paddingVertical:scale(20),
        justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default ScratchNWin;
