import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Navigation} from '../utils';
import {Header, Modal, WheelofSpin} from '../components';
import {
  SpinValuePrors,
  ThemeInterface,
  WinAlertPrors,
  closeAlertProps,
} from '../constant';
import {useThemeHook} from '../hook';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const SpinTheWheel = () => {
  var spinRefer = useRef<any>(null);
  const [selectedValue, SetSelectedValue] = useState<SpinValuePrors>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [isButton, SetInButton] = useState<boolean>(true);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [roundScore, setRoundScore] = useState([]);
  const [closeAlert, SetCloseAlert] = useState<closeAlertProps>({});
  const [isCloseModal, SetIsCloseModal] = useState<boolean>(false);
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
    const playerScore = async () => {
      if (Object.entries(selectedValue).length) {
        SetWinAlert({
          Title: `🎉 Congratulations 🎉`,
          Message: ` Congratulations you win ${selectedValue.value} Please Claim Your 🎁 gift!`,
        });
        SetIsWinModal(true);
        SetInButton(true);
        if (selectedValue.value) {
          await AsyncStorage.setItem('Score', selectedValue.value.toString());
          const score = await AsyncStorage.getItem('Score');
          setRoundScore([...roundScore, score] as never);
        }
      }
    };

    playerScore();
  }, [selectedValue]);

  const onSpinPress = () => {
    spinRefer?.current._tryAgain();
    SetInButton(false);
  };
  const onBackPress = () => {
    SetCloseAlert({
      Title: `Warning`,
      Message: `Are you want to close this game?`,
      buttonText: 'close',
    });
    SetIsCloseModal(true);
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
      <Header title="Spin the wheel" onBackPress={onBackPress} />
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.roundsText}>Rounds</Text>
            <Text style={styles.scoreText}>Score</Text>
          </View>
          {roundScore.map((score, index) => (
            <View style={styles.roundScoreContainer}>
              <View style={styles.roundContainer}>
                <Text style={styles.roundCount}>{index + 1}</Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.score}>{score}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

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
        <Modal
          visible={isCloseModal}
          type="two-button"
          title={closeAlert.Title}
          message={closeAlert.Message}
          buttonText="Ok"
          onClosePress={onCloseModalPress}
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
    mainContainer: {
      position: 'absolute',
      top: 40,
      left: 40,
      height: 200,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    roundsText: {
      marginHorizontal: 12,
      color: theme.color.white,
      fontSize: 12,
      fontWeight: '500',
    },
    scoreText: {
      color: theme.color.white,
      fontSize: 12,
      fontWeight: '500',
    },
    roundScoreContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundContainer: {
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    roundCount: {
      color: theme.color.white,
    },
    score: {
      color: theme.color.white,
    },
    scoreContainer: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40,
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
      top: 50,
      bottom: 35,
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
