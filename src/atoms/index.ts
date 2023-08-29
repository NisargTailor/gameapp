import {atom} from 'recoil';
import {ThemeInterface} from '../constant';
import {Color} from '../theme';
import {TrakApiInterface} from '../types/track.type';
import {UserApiInterface} from '../types/user.type';

export const themeState = atom<ThemeInterface>({
  key: 'themeState',
  default: {
    color: {
      primary: Color.primary,
      secondary: Color.secondary,
      tertiary: Color.tertiary,
      success: Color.success,
      error: Color.error,
      text: Color.text,
      textPrimary: Color.textPrimary,
      textSecondary: Color.textSecondary,
      backgroud: Color.backgroud,
      white: Color.white,
      border: Color.border,
      transparentBackground: Color.transparentBackground,
      shadowColor: Color.shadowColor,
    },
  },
});

export const loaderState = atom<boolean>({
  key: 'loaderState',
  default: false,
});

export const userState = atom<UserApiInterface>({
  key: 'userState',
  default: {} as UserApiInterface,
});

export const trakState = atom<TrakApiInterface[]>({
  key: 'trakState',
  default: [],
});
