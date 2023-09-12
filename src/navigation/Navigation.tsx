import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenName} from '../constant/constants';
import {
  Games,
  Home,
  LuckyBall,
  LuckyBox,
  LuckyCard,
  LuckyDice,
  LuckyLots,
  ScratchNWin,
  ShakeNWin,
  SpinTheWheel,
} from '../screens';

export const navigationRef = React.createRef();

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef as never}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenName.Home}>
        <Stack.Screen name={ScreenName.Home} component={Home} />
        <Stack.Screen name={ScreenName.Games} component={Games} />
        <Stack.Screen name={ScreenName.SpinTheWheel} component={SpinTheWheel} />
        <Stack.Screen name={ScreenName.ScratchNWin} component={ScratchNWin} />
        <Stack.Screen name={ScreenName.ShakeNWin} component={ShakeNWin} />
        <Stack.Screen name={ScreenName.LuckyBox} component={LuckyBox} />
        <Stack.Screen name={ScreenName.LuckyCard} component={LuckyCard} />
        <Stack.Screen name={ScreenName.LuckyDice} component={LuckyDice} />
        <Stack.Screen name={ScreenName.LuckyLots} component={LuckyLots} />
        <Stack.Screen name={ScreenName.LuckyBall} component={LuckyBall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
