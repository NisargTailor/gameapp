import {
  View,
  Text,
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import React from 'react';
import {ThemeInterface} from '../constant';
import {useThemeHook} from '../hook';

export interface ModalProps {
  title?: string;
  message?: string;
  type: 'spin-win' | 'two-button';
  visible: boolean;
  buttonText?: string;
  onClosePress: () => void;
}

const Modal: React.FC<ModalProps> = props => {
  const {type, visible, title, message, buttonText = '', onClosePress} = props;
  const [styles, theme] = useThemeHook(Styles);
  return (
    <RNModal
      transparent
      visible={visible}
      supportedOrientations={['portrait', 'landscape']}>
      <TouchableWithoutFeedback onPress={onClosePress}>
        <View style={styles.container}>
          {type === 'spin-win' && (
            <View style={styles.SpinWinContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          )}
          {type === 'two-button' && (
            <View style={styles.SpinWinContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.messageText}>{message}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Cancel" color={theme.color.error} />
                <Button
                  title={buttonText}
                  onPress={onClosePress}
                  color={theme.color.success}
                />
              </View>
            </View>
          )}
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
    titleText: {
      color: theme.color.white,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
      paddingBottom: 10,
    },
    messageText: {
      color: theme.color.white,
      textAlign: 'center',
    },
    SpinWinContainer: {
      backgroundColor: theme.color.backgroud,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      padding: 30,
      borderWidth: 2,
      borderColor: theme.color.border,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      marginTop: 20,
    },
    button: {
      backgroundColor: theme.color.backgroud,
    },
  });
};

export default Modal;
