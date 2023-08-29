//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../assets';
import { boxCardInterface } from '../constant';


export interface BoxProps {
    item?:boxCardInterface
    onPress?:() => void
    } 
    


// create a component
const BoxCard:React.FC<BoxProps> = (props) => {

    const {onPress} = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardBody}>
        <View style={styles.imageContainer}>
          <Image source={Images.gift} style={styles.imageContainer} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '33.33%',
    padding: 10,
  },
  cardBody: {
    backgroundColor: '#313131',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  imageContainer: {
    height: Dimensions.get('screen').width / 6 - 10,
    width:  Dimensions.get('screen').width / 6 - 10,
    resizeMode: 'contain',
  },
  titleText: {
    color: '#ffffff90',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '500' : '600',
  },
});

//make this component available to the app
export default BoxCard;
