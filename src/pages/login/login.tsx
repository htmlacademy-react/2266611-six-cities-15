import Layout from '../../shared/layout';
import Authorization from '../../widgets/authorization';
import Header from '../../widgets/header';

const Login = (): JSX.Element => (
  <Layout
    wrapper="page page--gray page--login"
    title="6 cities: authorization"
    header={<Header withToolbar={false} />}
    content={
      <main className="page__main page__main--login">
        <Authorization />
      </main>
    }
    footer={false}
  />
);

export default Login;
