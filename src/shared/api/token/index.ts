import { AUTH_TOKEN_KEY } from '../const';

type Token = string;

export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
export const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
export const saveToken = (token: Token) => localStorage.setItem(AUTH_TOKEN_KEY, token);
