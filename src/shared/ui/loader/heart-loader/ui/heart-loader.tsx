import styles from './styles.module.css';

const HeartLoader = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.preloader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.shadow}></div>
    </div>
  </div>
);

export default HeartLoader;
