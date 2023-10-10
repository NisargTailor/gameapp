//import liraries
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {BoxCard, Header, Modal} from '../components';
import {
  ThemeInterface,
  WinAlertPrors,
  boxCardInterface,
  closeAlertProps,
} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';
import {useOrientation} from '../utils/useOrientation';

// create a component
const LuckyBox = () => {
  const [selectedValue, SetSelectedValue] = useState<any>({});
  const [isWinModal, SetIsWinModal] = useState<boolean>(false);
  const [winAlert, SetWinAlert] = useState<WinAlertPrors>({});
  const [closeAlert, SetCloseAlert] = useState<closeAlertProps>({});
  const [isCloseModal, SetIsCloseModal] = useState<boolean>(false);
  const [styles] = useThemeHook(Styles);
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
  const orientation = useOrientation();
  const onBackPress = () => {
    SetCloseAlert({
      Title: `Warning`,
      Message: `Are you want to close this game?`,
      buttonText: 'close',
    });
    SetIsCloseModal(true);
  };
  const onCloseModalPress = () => {
    SetIsCloseModal(false);
    Navigation.goBack();
  };

  const onCardPress = (item: boxCardInterface) => {
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
      <Header title="Lucky Box" onBackPress={onBackPress} />
      <View style={styles.container}>
        {orientation !== 'PORTRAIT' && (
          <View style={styles.headerContainer}>
            <Text style={styles.TitleText}>Congratulations !</Text>
            <Text style={styles.subTitleText}>Select your lucky box!</Text>
          </View>
        )}
        <View style={styles.bodyContainer}>
          {orientation === 'PORTRAIT' && (
            <View style={styles.emptyContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.TitleText}>Congratulations !</Text>
                <Text style={styles.subTitleText}>Select your lucky box!</Text>
              </View>
            </View>
          )}
          <FlatList
            scrollEnabled={false}
            // contentContainerStyle={styles.flatListContainer}
            data={BoxData}
            numColumns={3}
            horizontal={false}
            renderItem={({item}) => (
              <BoxCard onPress={() => onCardPress(item)} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        {/* <View style={styles.footerContainer}>
          <Text style={styles.subTitleText}>
            click one of the box to win the Price!
          </Text>
        </View> */}
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
    },
    headerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      padding: 10,
    },
    emptyContainer: {
      flex: 1,
    },
    flatListContainer: {
      backgroundColor: 'blue',
    },
    footerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

//make this component available to the app
export default LuckyBox;
