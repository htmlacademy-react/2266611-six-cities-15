import styles from './styles.module.css';

const Loader = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.loader}></div>
  </div>
);

export default Loader;
