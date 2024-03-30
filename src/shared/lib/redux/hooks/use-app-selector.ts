import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TRootState } from '../types/store-types';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
