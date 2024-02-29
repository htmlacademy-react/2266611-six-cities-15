import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../shared/const';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = (): JSX.Element => (
  <div className={styles.wrapper}>

    <Helmet>
      <title>Error 404</title>
    </Helmet>

    <div className={styles.container}>
      <h1 className={styles.title}><span className="visually-hidden">Error</span><span className={styles.right}>4</span>0<span className={styles.left}>4</span></h1>
      <h2 className={styles.subtitle}>Sorry, Page Not Found</h2>
      <p className={styles.description}>The page you are looking for was moved, removed, renamed or might never existed</p>
      <Link className={styles.link} to={AppRoute.Root}>Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
