import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../types/store-types';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
