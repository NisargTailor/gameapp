import {navigationRef} from '../navigation/Navigation';
import {StackActions, CommonActions} from '@react-navigation/native';

const dispatch = action => navigationRef.current?.dispatch(action);

export const navigate = (screenName, params = {}) => {
  dispatch(CommonActions.navigate(screenName, params));
};

export const resetAndNavigate = (index, screenName, params = {}) => {
  const action = {
    index: index,
    routes: [
      {
        name: screenName,
        params: params,
      },
    ],
  };
  dispatch(CommonActions.reset(action));
};

export const goBack = () => {
  dispatch(CommonActions.goBack());
};

export const replaceRoute = (routeName, params = {}) => {
  dispatch(StackActions.replace(routeName, params));
};

export const popRoute = (popNumber = 1) => {
  dispatch(StackActions.pop(popNumber));
};

export const popToTop = () => {
  dispatch(StackActions.popToTop());
};

export const push = (screenName, params = {}) => {
  dispatch(StackActions.push(screenName, params));
};

export const getCurrentRoute = () => {
  if (!navigationRef) {
    return null;
  }
  const {index, routes} = navigationRef.current?.getRootState() || {};
  if (index === undefined || !routes) {
    return null;
  }
  const currentRoute = routes[index];
  const currentState = currentRoute.state;
  if (!currentState) {
    return null;
  }
  return currentState.routes[currentState.index];
};

export const setParams = (params, screenName = null) => {
  if (screenName) {
    dispatch({
      ...CommonActions.setParams(params),
      source: screenName,
    });
  } else {
    dispatch(CommonActions.setParams(params));
  }
};
