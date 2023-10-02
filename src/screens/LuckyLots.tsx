import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Images} from '../assets';
import {Header, Modal} from '../components';
import {ThemeInterface, WinAlertPrors, closeAlertProps} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';

const LuckyLots = () => {
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const shakeAnimation = new Animated.Value(0);
  const celebrateAnimation = new Animated.Value(0);
  const scaleHideAnimation = new Animated.Value(1);
  const [closeAlert, SetCloseAlert] = useState<closeAlertProps>({});
  const [isCloseModal, SetIsCloseModal] = useState<boolean>(false);

  const [styles] = useThemeHook(Styles);

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
  const scaleAnimation = {
    transform: [
      {
        scale: celebrateAnimation.interpolate({
          inputRange: [1, 4],
          outputRange: [0, 0.1],
        }),
      },
    ],
    zIndex: 99999,
    height: 200,
    width: 200,
  };

  const bowlScaleAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleHideAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleHideAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startCelebrate = () => {
    Animated.sequence([
      Animated.timing(celebrateAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(celebrateAnimation, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
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

  const handleClick = () => {
    startShake();
    startCelebrate();
    bowlScaleAnimation();
    setTimeout(() => {
      shakeAnimation.stopAnimation();
      SetWinAlert({
        Title: '🎉 Congratulations 🎉',
        Message: ' Congratulations you win $100USD Please Claim Your 🎁 gift!',
      });
      SetIsWinModal(true);
    }, 2000);
  };

  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Lucky Lots" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congratulations !</Text>
          {/* <Text style={styles.subTitleText}>Here is your scratch card</Text> */}
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={handleClick}>
            {!isWinModal && (
              <>
                <Animated.View
                  style={[
                    styles.paperLeftContainer,
                    {
                      transform: [
                        {translateY: celebrateAnimation},
                        {scale: scaleHideAnimation},
                      ],
                    },
                  ]}>
                  <Image source={Images.paper} style={styles.paperStyle} />
                </Animated.View>

                <Animated.View
                  style={[
                    styles.paperCenterContainer,
                    {
                      transform: [{translateY: celebrateAnimation}],
                    },
                    scaleAnimation,
                  ]}>
                  <Image
                    source={Images.paper}
                    style={styles.paperCenterStyle}
                  />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.paperRightContainer,
                    {
                      transform: [
                        {translateY: celebrateAnimation},
                        {scale: scaleHideAnimation},
                      ],
                    },
                  ]}>
                  <Image source={Images.paper} style={styles.paperStyle} />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.cardContainer,
                    {
                      transform: [
                        {translateX: shakeAnimation},
                        {scale: scaleHideAnimation},
                      ],
                    },
                  ]}>
                  <Image source={Images.bowl} style={styles.scratch_card} />
                </Animated.View>
              </>
            )}
            {isWinModal && (
              <Animated.View style={styles.paperContainer}>
                <Image source={Images.paper} style={styles.paperDefault} />
              </Animated.View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.subTitleText}>Tap the above bowl.</Text>
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
    paperContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    paperDefault: {
      height: 200,
      width: 200,
    },
    paperLeftContainer: {
      position: 'absolute',
      top: 70,
    },
    paperCenterContainer: {
      position: 'absolute',
      top: -10,
      left: 10,
      right: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paperRightContainer: {
      position: 'absolute',
      top: 80,
      right: 10,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
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
    paperStyle: {
      height: 75,
      width: 75,
    },
    paperCenterStyle: {
      height: 100,
      width: 100,
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

export default LuckyLots;
