import {useRecoilState, useRecoilValue} from 'recoil';
import {themeState} from '../atoms';
import {useMemo} from 'react';
import {ThemeInterface} from '../constant/interfaces';

const useThemeHook = (stylesheet: (theme: ThemeInterface) => any) => {
  const [theme, setTheme] = useRecoilState(themeState);

  const styles = useMemo(() => stylesheet(theme), [theme]);

  const updateTheme = (newTheme: ThemeInterface) => {
    setTheme(newTheme);
  };

  return [styles, {...theme}, updateTheme] as const;
};

const useThemeValue = () => {
  const theme = useRecoilValue(themeState);
  return theme;
};

export {useThemeHook, useThemeValue};
