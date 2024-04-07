import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TRootState } from '../../../../types';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
