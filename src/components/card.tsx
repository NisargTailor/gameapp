//import liraries
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {GameCardInterface} from '../constant';

export interface cardProps {
  item?: GameCardInterface;
  onPress?: () => void;
}

// create a component
const Card: React.FC<cardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardBody}>
        <View style={styles.imageContainer}>
          <Image source={item?.image} style={styles.image} />
        </View>
        <Text style={styles.titleText}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '25%',
    padding: 10,
  },
  cardBody: {
    backgroundColor: '#313131',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#1c1c1c',
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  titleText: {
    color: '#ffffff90',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '500' : '600',
  },
});

//make this component available to the app
export default Card;
