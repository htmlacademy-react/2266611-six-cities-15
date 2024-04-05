import { useActionCreators } from '../shared/lib/redux';
import { userActions } from '../entities/user';
import { useEffect } from 'react';

import AppRoutes from './router/app-routes';

const App = (): JSX.Element => {
  const { checkAuthAction } = useActionCreators(userActions);

  useEffect(() => {
    checkAuthAction();
  }, [checkAuthAction]);

  return (
    <AppRoutes />
  );
};

export default App;
