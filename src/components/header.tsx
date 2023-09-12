//import liraries
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BACK_ICON} from '../assets';
import {ThemeInterface} from '../constant';
import {useThemeHook} from '../hook';
import {FontName} from '../theme';

export interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
}

// create a component
const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
  const [styles] = useThemeHook(Styles);

  return (
    <View style={styles.container}>
      <View style={styles.toolContainer}>
        <Pressable onPress={onBackPress}>
          <BACK_ICON height={24} width={24} />
        </Pressable>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </View>
  );
};

// define your styles
const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    container: {
      padding: 10,
    },
    toolContainer: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontFamily: FontName.poppinsSemiBold,
      fontSize: 18,
      color: theme.color.white,
      marginLeft: 10,
    },
  });
};

//make this component available to the app
export default Header;
