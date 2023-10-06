//import liraries
import React from 'react';
import {View} from 'react-native';

export interface SeparatorProps {
  height?: number;
  width?: number;
  style?: any;
}

// create a component
const Separator: React.FC<SeparatorProps> = ({
  width = 1,
  height = 1,
  style,
}) => {
  return <View style={[style, {height: height, width: width}]} />;
};

export default Separator;
