import {useRecoilState, useRecoilValue} from 'recoil';
import {loaderState} from '../atoms';

export const useLoaderState = () => {
  const [loader, SetLoader] = useRecoilState(loaderState);

  const updateLoader = (value: boolean): void => {
    SetLoader(value);
  };

  return [updateLoader, loader] as const;
};

export const useLoaderValue = () => {
  const loader = useRecoilValue(loaderState);
  return loader;
};
