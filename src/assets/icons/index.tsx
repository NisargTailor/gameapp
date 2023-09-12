import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export type IconProps = {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  height?: number;
  width?: number;
};

export const HOME_ICON = ({
  width = 28,
  height = 25,
  primaryColor,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    color={primaryColor}
    data-name="Group 135813"
    viewBox="0 0 28.646 25.631">
    <Path
      fillRule="evenodd"
      d="M17.066 23.803v-7.619a1.524 1.524 0 0 0-1.524-1.524h-2.438a1.524 1.524 0 0 0-1.523 1.524v7.619Zm7.923-14.578 2.2 1.6a.914.914 0 1 0 1.075-1.479L16.289.636a3.352 3.352 0 0 0-3.942 0L.372 9.346a.914.914 0 1 0 1.075 1.479l2.205-1.6v13.052a3.352 3.352 0 0 0 3.352 3.352h14.628a3.352 3.352 0 0 0 3.352-3.352Zm-9.77-7.105a1.522 1.522 0 0 0-1.792 0L5.485 7.896v14.381a1.524 1.524 0 0 0 1.524 1.524H9.75v-7.619a3.352 3.352 0 0 1 3.352-3.352h2.438a3.352 3.352 0 0 1 3.352 3.352v7.619h2.743a1.524 1.524 0 0 0 1.524-1.524V7.895Z"
      data-name="Path 200379"
    />
  </Svg>
);

export const HELP_ICON = ({
  width = 28,
  height = 25,
  primaryColor,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    color={primaryColor}
    viewBox="0 0 25.239 24">
    <G data-name="Group 853">
      <Path
        fill="none"
        d="M0 .294h25.239v23.412H0z"
        data-name="Rectangle 2353"
      />
      <Path
        d="M5.745 4.643v-.014Zm1.689 9.018 4.735 1.659a1.015 1.015 0 0 0 .327.059h.017a.519.519 0 0 0 .068 0h.091a1.147 1.147 0 0 0 .243-.066l.028-.011c.019-.009.036-.017.07-.036a1.008 1.008 0 0 0 .2-.138l.036-.027a.637.637 0 0 0 .055-.048l4.8-4.851a.906.906 0 0 0 .272-.678.914.914 0 0 0-.323-.657 1.035 1.035 0 0 0-.686-.25 1.048 1.048 0 0 0-.744.3l-4.38 4.42-4.111-1.443a1.059 1.059 0 0 0-.349-.059 1.019 1.019 0 0 0-.951.611.889.889 0 0 0 .027.723.975.975 0 0 0 .575.492Zm16.859-1.1a10.638 10.638 0 0 0-3.788-7.611 12.112 12.112 0 0 0-8.384-2.883h-.013a14.488 14.488 0 0 0-3.145.414l.612-1.088a.887.887 0 0 0 .117-.485.932.932 0 0 0-.539-.8 1.069 1.069 0 0 0-.467-.107 1.023 1.023 0 0 0-.9.5l-1.944 3.45a.337.337 0 0 0-.017.034l-.021.045a.946.946 0 0 0-.034.087l-.01.026-.011.034a.784.784 0 0 0-.023.089v.027c0 .023-.005.045-.005.065v.022a.482.482 0 0 0 0 .141c0 .02.005.044.008.059s.007.031.012.046l.5-.1-.5.118v.013-.013l.011.038a.995.995 0 0 0 .029.081.906.906 0 0 0 .05.1l.052.08.037.047c.012.014.035.043.065.073l.019.02a.791.791 0 0 0 .081.066.672.672 0 0 0 .1.069l.027.015.054.026.021.01.05.025a.574.574 0 0 0 .066.026l3.614 1.2a1.06 1.06 0 0 0 .341.056 1.01 1.01 0 0 0 .95-.628.937.937 0 0 0-.616-1.207l-1.288-.428a12.736 12.736 0 0 1 2.751-.367c5.4-.218 9.88 3.681 10.109 8.684a8.689 8.689 0 0 1-2.55 6.527 9.925 9.925 0 0 1-6.733 2.935 9.89 9.89 0 0 1-.421.009 9.419 9.419 0 0 1-9.691-8.694.981.981 0 0 0-1.009-.905h-.043a.972.972 0 0 0-.965.985c.269 5.89 5.413 10.5 11.708 10.5.167 0 .338 0 .506-.01 6.472-.247 11.504-5.376 11.227-11.421Z"
        data-name="Path 7376"
      />
    </G>
  </Svg>
);
export const PROFILE_ICON = ({
  width = 28,
  height = 25,
  primaryColor,
  secondaryColor,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    fill={primaryColor}
    viewBox="0 0 23.001 26.125">
    <G data-name="Group 201852">
      <Path
        stroke={secondaryColor}
        strokeWidth={1.25}
        d="M11.5 3.475a3.15 3.15 0 1 1-3.15 3.15 3.15 3.15 0 0 1 3.15-3.15m0-2.85a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 13.5Z"
        data-name="Icon material-person-outline"
      />
      <G fill={secondaryColor} data-name="Intersection 1">
        <Path d="M22.108 25.25H.893a10.764 10.764 0 0 1-.018-.625c0-5.858 4.767-10.624 10.627-10.624 5.858 0 10.624 4.766 10.624 10.624 0 .208-.006.417-.018.625Z" />
        <Path
          fill={primaryColor}
          d="M21.248 24.375c-.133-5.26-4.454-9.499-9.746-9.499-5.294 0-9.616 4.239-9.749 9.499h19.495m1.656 1.75H.097a11.624 11.624 0 0 1-.097-1.5c0-6.35 5.15-11.499 11.502-11.499 6.35 0 11.5 5.15 11.5 11.499 0 .508-.034 1.009-.098 1.5Z"
        />
      </G>
    </G>
  </Svg>
);
export const CLOSE_ICON = ({
  width = 24,
  height = 24,
  primaryColor,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    color={primaryColor}
    viewBox="0 0 15.931 15.931">
    <G
      fill="none"
      stroke={primaryColor || '#fff'}
      strokeLinecap="round"
      strokeWidth={2}
      data-name="Group 201811">
      <Path d="M1.414 14.517 14.517 1.414" data-name="Line 512" />
      <Path d="M14.517 14.517 1.414 1.414" data-name="Line 513" />
    </G>
  </Svg>
);

export const BACK_ICON = ({
  width = 24,
  height = 24,
  primaryColor,
}: IconProps) => (
  <Svg width={width} height={height} color={primaryColor} viewBox="0 0 24 24">
    <Path fill="none" d="M0 0h24v24H0Z" data-name="Path 767" />
    <Path
      fill={primaryColor || '#fff'}
      stroke={primaryColor || '#fff'}
      d="M19.885 11.402H5.952l6.181-6.178a.783.783 0 0 0 .232-.561.791.791 0 0 0-.232-.562.814.814 0 0 0-1.121 0L3.396 11.72a.784.784 0 0 0-.216.407.794.794 0 0 0 .216.711l7.045 7.046a.786.786 0 0 0 .56.231.786.786 0 0 0 .561-.231.794.794 0 0 0 0-1.119l-5.473-5.471h13.794a.95.95 0 0 0 .949-.948.949.949 0 0 0-.947-.944Z"
      data-name="Path 4271"
    />
  </Svg>
);

export const DOWN_ARROW_ICON = ({
  width = 24,
  height = 24,
  primaryColor,
}: IconProps) => (
  <Svg
    width={width}
    fill={primaryColor || '#E35255'}
    height={height}
    viewBox="0 0 330 330">
    <Path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
  </Svg>
);

export const UP_ARROW_ICON = ({
  width = 24,
  height = 24,
  primaryColor,
}: IconProps) => (
  <Svg
    width={width}
    fill={primaryColor || '#E35255'}
    height={height}
    viewBox="0 0 330 330">
    <Path d="m325.606 229.393-150.004-150a14.997 14.997 0 0 0-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 0 0 315 255a14.95 14.95 0 0 0 10.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z" />
  </Svg>
);

export const ERROR_ICON = ({
  width = 24,
  height = 24,
  primaryColor,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20.582 20.582">
    <Path
      fill={primaryColor || '#ffb819'}
      d="M9.262 13.378h2.058v2.058H9.262Zm0-8.233h2.058v6.175H9.262ZM10.281 0a10.291 10.291 0 1 0 10.3 10.291A10.286 10.286 0 0 0 10.281 0Zm.01 18.524a8.233 8.233 0 1 1 8.233-8.233 8.231 8.231 0 0 1-8.233 8.233Z"
      data-name="Icon material-error-outline"
    />
  </Svg>
);
