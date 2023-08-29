import {View, Text, Modal as RNModal, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {ThemeInterface} from '../constant';
import {scale} from '../utils';
import {useThemeHook} from '../hook';
import {FontName} from '../theme';

export interface ModalProps {
  title?:string
  message?:string
  type: 'spin-win' | 'two-button';
  visible: boolean;
  onClosePress:() => void
}

const Modal: React.FC<ModalProps> = (props) => {
  const {type, visible,title,message,onClosePress} = props
  const [styles, theme] = useThemeHook(Styles);
  return (
    <RNModal transparent visible={visible}>
      <TouchableWithoutFeedback onPress={onClosePress}>
      <View style={styles.container}>
        {type === 'spin-win' && (
          <View style={styles.SpinWinContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        )}
        {type === 'two-button' && <Text>two-button</Text>}
      </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.transparentBackground,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText:{
      color:theme.color.white,
      fontSize:scale(16),
      fontWeight:'600',
      textAlign:'center',paddingBottom:scale(10)
    },
    messageText:{
      color:theme.color.white,
      textAlign:'center'
    },
    SpinWinContainer: {
      backgroundColor: theme.color.backgroud,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(20),
      padding:scale(30),
      borderWidth:2,
      borderColor:theme.color.border
    },
  });
};

export default Modal;
