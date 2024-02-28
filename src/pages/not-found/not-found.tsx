import { AppRoute } from '../../shared/const';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Sorry, Page Not Found</h2>
      <p className={styles.description}>The page you are looking for was moved, removed, renamed or might never existed</p>
      <Link className={styles.link} to={AppRoute.Root}>Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
