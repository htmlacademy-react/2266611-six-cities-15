import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../shared/enum';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ authorizationStatus, isReverse, children }: PrivateRouteProps): JSX.Element => {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return children;
  }

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} replace />
  );
};

export default PrivateRoute;
