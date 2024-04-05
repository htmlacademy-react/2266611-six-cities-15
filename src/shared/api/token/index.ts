import { AUTH_TOKEN_KEY } from '../const';

type TToken = string;

export const getToken = (): TToken => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
export const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
export const saveToken = (token: TToken) => localStorage.setItem(AUTH_TOKEN_KEY, token);
