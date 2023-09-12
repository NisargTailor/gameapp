//import liraries
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import {Card} from '../components';
import {games} from '../constant/data';
import {GameCardInterface, ScreenName, ThemeInterface} from '../constant';
import {useThemeHook} from '../hook';
import {Navigation} from '../utils';
// create a component
const Home = () => {
  const [styles] = useThemeHook(Styles);

  const onCardPress = (item: GameCardInterface) => {
    switch (item.name) {
      case 'Spin the wheel':
        Navigation.navigate(ScreenName.SpinTheWheel);
        break;
      case 'Scratch & Win':
        Navigation.navigate(ScreenName.ScratchNWin);
        break;
      case 'Shake & Win':
        Navigation.navigate(ScreenName.ShakeNWin);
        break;
      case 'Lucky Box':
        Navigation.navigate(ScreenName.LuckyBox);
        break;
      case 'Lucky Cards':
        Navigation.navigate(ScreenName.LuckyCard);
        break;
      case 'Lucky Dice':
        Navigation.navigate(ScreenName.LuckyDice);
        break;
      case 'Lucky Lots':
        Navigation.navigate(ScreenName.LuckyLots);
        break;
      case 'Lucky Ball':
        Navigation.navigate(ScreenName.LuckyBall);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Games</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={games}
          numColumns={4}
          horizontal={false}
          renderItem={({item}) => (
            <Card item={item} onPress={() => onCardPress(item)} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles

const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
      paddingHorizontal: 20,
    },
    flatlistContainer: {
      flex: 1,
    },
    headerContainer: {
      padding: 10,
    },
    headerText: {
      fontSize: 21,
      color: '#ffffff90',
      fontWeight: Platform.OS === 'ios' ? '400' : '700',
    },
  });
};
//make this component available to the app
export default Home;
