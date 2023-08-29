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
} from 'react-native';
import RNShake from 'react-native-shake';
import {ThemeInterface, WinAlertPrors} from '../constant';
import {scale, Navigation} from '../utils';
import {useThemeHook} from '../hook';
import {Header, Modal} from '../components';
import {Images} from '../assets';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const CARD_SIZE = Dimensions.get('screen').width / 1.4;
// create a component
const ShakeNWin = () => {
  const [styles, theme] = useThemeHook(Styles);
  const shakeAnimation = new Animated.Value(0);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [shakeCount,SetShakeCount] = useState<number>(0)
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  useEffect(() => {
    startShake();
    const subscription = RNShake.addListener(() => {
      // Your code here...
      console.log('shake');
      ReactNativeHapticFeedback.trigger('impactHeavy', options);
      shakeAnimation.stopAnimation();
      WinAlert()
    });
    return () => {
      // Your code here...
      subscription.remove();
    };
  }, []);

  const onBackPress = () => {
    Navigation.goBack();
  };
  const startShake = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const WinAlert = () => {
    SetWinAlert({
      Title: `🎉 Congratulations 🎉`,
      Message: ` Congratulations you win $100USD Please Clame Your 🎁 gift!`,
    });
     SetIsWinModal(true);
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Shake & Win" onBackPress={onBackPress} />
      <View style={styles.headerContainer}>
        <Text style={styles.TitleText}>Congatulation !</Text>
        <Text style={styles.subTitleText}>Shake you phone get the reword!</Text>
      </View>

      <Animated.View
        style={[
          styles.cardContainer,
          {transform: [{translateX: shakeAnimation}]},
        ]}>
        <Image source={Images.shake} style={styles.background_view} />
      </Animated.View>

      <View style={styles.footerContainer}>
        <Text style={styles.subTitleText}>
        Shake you phone get the reword!
        </Text>
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
      paddingVertical: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
//make this component available to the app
export default ShakeNWin;
