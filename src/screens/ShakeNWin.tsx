//import liraries
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import RNShake from 'react-native-shake';
import {Images} from '../assets';
import {Header, Modal} from '../components';
import {ThemeInterface, WinAlertPrors, closeAlertProps} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';

const CARD_SIZE = Dimensions.get('screen').height / 1.4;
// create a component
const ShakeNWin = () => {
  const [styles, theme] = useThemeHook(Styles);
  const shakeAnimation = new Animated.Value(0);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [shakeCount, SetShakeCount] = useState<number>(0);
  const [closeAlert, SetCloseAlert] = useState<closeAlertProps>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [isCloseModal, SetIsCloseModal] = useState<boolean>(false);
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
      WinAlert();
    });
    return () => {
      // Your code here...
      subscription.remove();
    };
  }, []);

  const onBackPress = () => {
    SetCloseAlert({
      Title: `Warning`,
      Message: `Are you want to close this game?`,
      buttonText: 'close',
    });
    SetIsCloseModal(true);
    // Navigation.goBack();
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
      Message: ` Congratulations you win $100USD Please Claim Your 🎁 gift!`,
    });
    SetIsWinModal(true);
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };
  const onCloseModalPress = () => {
    SetIsCloseModal(false);
    Navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Shake & Win" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          <Text style={styles.subTitleText}>
            Shake you phone get the reward!
          </Text>
        </View>
        <Animated.View
          style={[
            styles.cardContainer,
            {transform: [{translateX: shakeAnimation}]},
          ]}>
          <Image source={Images.shake} style={styles.shakeImage} />
        </Animated.View>
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
      </View>
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
      flexDirection: 'row',
      backgroundColor: theme.color.backgroud,
      paddingBottom: 10,
    },
    headerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    TitleText: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.color.textPrimary,
    },
    subTitleText: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: '500',
      color: theme.color.textSecondary,
      textAlign: 'center',
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shakeImage: {
      height: CARD_SIZE,
      width: CARD_SIZE,
      resizeMode: 'repeat',
    },
    footerContainer: {
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
//make this component available to the app
export default ShakeNWin;
