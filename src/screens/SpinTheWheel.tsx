import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Navigation} from '../utils';
import {Header, Modal, WheelofSpin} from '../components';
import {SpinValuePrors, ThemeInterface, WinAlertPrors} from '../constant';
import {useThemeHook} from '../hook';

// create a component
const SpinTheWheel = () => {
  var spinRefer = useRef<any>(null);
  const [selectedValue, SetSelectedValue] = useState<SpinValuePrors>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [isButton, SetInButton] = useState<boolean>(true);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles] = useThemeHook(Styles);
  const participants = ['10', '20', '30', '40'];
  const wheelOptions = {
    rewards: participants,
    knobSize: 30,
    borderWidth: 5,
    borderColor: '#fff',
    innerRadius: 30,
    duration: 6000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    onRef: (ref: any) => {
      spinRefer.current = ref;
    },
  };

  useEffect(() => {
    if (Object.entries(selectedValue).length) {
      SetWinAlert({
        Title: `🎉 Congratulations 🎉`,
        Message: ` Congratulations you win ${selectedValue.value} Please Clame Your 🎁 gift!`,
      });
      SetIsWinModal(true);
      SetInButton(true);
    }
  }, [selectedValue]);

  const onSpinPress = () => {
    spinRefer?.current._tryAgain();
    SetInButton(false);
  };
  const onBackPress = () => {
    Navigation.goBack();
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Spin the wheel" onBackPress={onBackPress} />
        <View style={styles.container}>
          <View style={styles.WheelContainer}>
            <WheelofSpin
              options={wheelOptions}
              getWinner={(value: any, index: any) => {
                SetSelectedValue({value: value, index: index});
              }}
            />
          </View>
          <Modal
            visible={isWinModal}
            type="spin-win"
            title={winAlert.Title}
            message={winAlert.Message}
            onClosePress={onWinModelClosePress}
          />
          {isButton && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.spinButton} onPress={onSpinPress}>
                <Text style={styles.spinButtonText}>Tap and spin!</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

// define your styles
const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
    },
    HeaderContainer: {
      zIndex: 1000,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    WheelContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    buttonContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.color.white,
    },
    spinButton: {
      zIndex: 10,
      padding: 18,
      borderRadius: 20,
      backgroundColor: theme.color.primary,
      borderWidth: 1,
      borderColor: theme.color.tertiary,
    },
  });
};
//make this component available to the app
export default SpinTheWheel;
