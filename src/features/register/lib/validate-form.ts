import { EMAIL_REGEXP, PASSWORD_REGEXP } from '../const';

export const validateEmail = (data: string) => EMAIL_REGEXP.test(data);
export const validatePassword = (data: string) => PASSWORD_REGEXP.test(data);
