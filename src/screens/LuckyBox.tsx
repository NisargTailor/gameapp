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
const LuckyBox = () => {
  const [selectedValue, SetSelectedValue] = useState<any>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [styles, theme] = useThemeHook(Styles);
  const BoxData = [
    {id: 1, value: '66', name: 'box1'},
    {id: 2, value: '45', name: 'box2'},
    {id: 3, value: '76', name: 'box3'},
    {id: 4, value: '87', name: 'box4'},
    {id: 5, value: '54', name: 'box5'},
    {id: 6, value: '45', name: 'box6'},
    {id: 7, value: '76', name: 'box7'},
    {id: 8, value: '87', name: 'box8'},
    {id: 9, value: '54', name: 'box9'},
  ];
  const onBackPress = () => {
    Navigation.goBack();
  };

  const onCardPress = (item: boxCardInterface) => {
    console.log("===>",item)
    WinAlert(item)
    
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
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Lucky Box" onBackPress={onBackPress} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.TitleText}>Congatulation !</Text>
          <Text style={styles.subTitleText}>Select your lucky box!</Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.flatListContainer}
            data={BoxData}
            numColumns={3}
            horizontal={false}
            renderItem={({item}) => <BoxCard onPress={() => onCardPress(item)} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.subTitleText}>
            click one of the box to win the Price!
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
      flex: 1,
      padding: scale(10),
    },
    flatListContainer: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
      paddingBottom: scale(30),
    },
    footerContainer: {
      paddingVertical: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyBox;
