import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Navigation, scale} from '../utils';
import {Header, Modal, WheelofSpin} from '../components';
import {SpinValuePrors, ThemeInterface, WinAlertPrors} from '../constant';
import {useThemeHook} from '../hook';

// create a component
const SpinTheWheel = () => {
  var spinRefer = useRef<any>(null);
  const [selectedValue, SetSelectedValue] = useState<SpinValuePrors>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles, theme] = useThemeHook(Styles);
  const participants = ['10', '20', '30', '40', '50', '60', '70', '90', 'Free'];
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
    }
  }, [selectedValue]);

  const onSpinPress = () => {
    spinRefer?.current._tryAgain();
  };
  const onBackPress = () => {
    Navigation.goBack();
  };
  const onWinModelClosePress = () => {
    SetIsWinModal(false);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Spin the wheel" onBackPress={onBackPress} />
      <View style={styles.container}>
        <WheelofSpin
          options={wheelOptions}
          getWinner={(value: any, index: any) => {
            SetSelectedValue({value: value, index: index});
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.spinButton} onPress={onSpinPress}>
            <Text style={styles.spinButtonText}>Spin The Wheel !</Text>
          </TouchableOpacity>
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
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinButtonText: {
      fontSize: 18,
      fontWeight: '800',
      color: theme.color.white,
    },
    spinButton: {
      zIndex: 10,
      padding: 18,
      borderRadius: 20,
      backgroundColor: theme.color.primary,
      borderWidth: scale(2),
      borderColor: theme.color.tertiary,
    },
  });
};
//make this component available to the app
export default SpinTheWheel;
