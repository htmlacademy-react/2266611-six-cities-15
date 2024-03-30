import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../types/store-types';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  /* eslint-disable */
  return useMemo(() => bindActionCreators(actions, dispatch), []);
  /* eslint-enable */
};
