import { AuthorizationStatus } from '../../shared/enum';

import Layout from '../../shared/layout';
import Authorization from '../../widgets/authorization';
import MemoizedHeader from '../../widgets/header';
import ClockLoader from '../../shared/ui/loader/clock-loader';


type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

const Login = ({authorizationStatus}: LoginProps): JSX.Element => {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <ClockLoader />;
  }

  return (
    <Layout
      wrapper="page page--gray page--login"
      title="6 cities: authorization"
      header={<MemoizedHeader withToolbar={false} />}
      content={
        <main className="page__main page__main--login">
          <Authorization />
        </main>
      }
      footer={false}
    />
  );
};

export default Login;
