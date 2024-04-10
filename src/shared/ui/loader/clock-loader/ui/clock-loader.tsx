import styles from './styles.module.css';

const ClockLoader = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.loader}>
      <span className={styles.hour}></span>
      <span className={styles.min}></span>
      <span className={styles.circle}></span>
    </div>
  </div>
);

export default ClockLoader;
