export interface ThemeInterface {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    success: string;
    error: string;
    text: string;
    textPrimary: string;
    textSecondary: string;
    backgroud: string;
    white: string;
    border: string;
    transparentBackground: string;
    shadowColor: string;
  };
}

export interface LoginApiInterface {
  jwt: string;
  user: UserInterface;
}

export interface UserInterface {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SimpleNodeInterface {
  id: number;
  name: string;
}
export interface GameCardInterface {
  id: number;
  name: string;
  image: string;
}
export interface boxCardInterface {
  id: number;
  name: string;
  value: string;
}

export interface SpinValuePrors {
  index?: string;
  value?: string;
}
export interface WinAlertPrors {
  Title?: string;
  Message?: string;
}

export interface closeAlertProps {
  Title?: string;
  Message?: string;
  buttonText?: string;
}
