import React, {useRef, useState} from 'react';
import {Animated, Image, TouchableOpacity} from 'react-native';
import {Images} from '../assets';

export interface DicePrors {
  onDiceChange?: (number: number) => void;
}

const DiceAnimation: React.FC<DicePrors> = props => {
  const {onDiceChange} = props;

  var diceImages = [
    Images.dice1,
    Images.dice2,
    Images.dice3,
    Images.dice4,
    Images.dice5,
    Images.dice6,
  ];
  // Use Animated.Value for rotation and scaling
  const rotateValue = useRef(new Animated.Value(0));
  const scaleValue = useRef(new Animated.Value(1));
  const [image, setNewImage] = useState(diceImages[5]);

  const rollDice = () => {
    var interval = setInterval(() => {
      var randomNum3 = Math.floor(Math.random() * 6);
      setNewImage(diceImages[randomNum3]);
    }, 100);

    // Define the animation sequence for rotation and scaling
    var randomNum1 = Math.floor(Math.random() * 6);
    setTimeout(() => {
      setNewImage(diceImages[randomNum1]);
      rotateValue.current.stopAnimation();
      clearInterval(interval);
      if (onDiceChange !== undefined) {
        // Now it's safe to access properties or methods of myObject
        onDiceChange(randomNum1 + 1);
      }
    }, 4000);

    Animated.loop(
      Animated.sequence([
        // Rotate 45 degrees
        Animated.timing(rotateValue.current, {
          toValue: 45,
          duration: 10,
          useNativeDriver: true,
        }),
        // Reset rotation to 0 degrees
        Animated.timing(rotateValue.current, {
          toValue: 0,
          duration: 10, // Instant reset
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <TouchableOpacity onPress={rollDice}>
      <Animated.View
        style={{
          transform: [
            // Use interpolate to convert rotation value to degrees
            {
              rotate: rotateValue.current.interpolate({
                inputRange: [0, 45],
                outputRange: ['0deg', '45deg'],
              }),
            },
            // Use scale value directly
            {scale: scaleValue.current},
          ],
        }}>
        <Image
          style={{height: 100, width: 100, borderRadius: 20}}
          source={image}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default DiceAnimation;
