import { createAppAsyncThunk } from '../../../shared/lib/redux';
import { APIRoute } from '../../../shared/enum';
import { TUser, TAuthData } from '../../../shared/types/user';
import { saveToken, dropToken } from '../../../shared/api/token';

export const checkAuthAction = createAppAsyncThunk<TUser, undefined>(
  'user/auth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUser>(APIRoute.Login);

    return data;
  }
);

export const loginAction = createAppAsyncThunk<TUser, TAuthData>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<TUser>(APIRoute.Login, { email, password });
    saveToken(data.token);

    return data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
