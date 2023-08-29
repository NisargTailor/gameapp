//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ThemeInterface} from '../constant';
import {scale} from '../utils';
import {FontName} from '../theme';
import {useThemeHook} from '../hook';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BACK_ICON} from '../assets';

export interface HeaderProps {
  title: string;
  onBackPress?: () => void;
}

// create a component
const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
  const insets = useSafeAreaInsets();
  const [styles, theme] = useThemeHook(Styles);

  return (
    <View style={[styles.container]}>
      <View style={styles.toolContainer}>
        <Pressable onPress={onBackPress}>
          <BACK_ICON />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

// define your styles
const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.backgroud,
    },
    toolContainer: {
      paddingVertical: scale(20),
      paddingBottom: scale(15),
      paddingHorizontal: scale(10),
      flexDirection: 'row',
    },
    title: {
      fontFamily: FontName.poppinsSemiBold,
      fontSize: scale(16),
      color: theme.color.white,
      letterSpacing: scale(0.66),
      marginLeft: scale(16),
    },
  });
};

//make this component available to the app
export default Header;
