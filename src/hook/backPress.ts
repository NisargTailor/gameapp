import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackButtonPress = (callback: () => any): void => {
  useEffect(() => {
    const handleBackPress = (): boolean => {
      if (callback && typeof callback === 'function') {
        return callback();
      }
      return false; // Prevent default back button behavior
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [callback]);
};

export default useBackButtonPress;
