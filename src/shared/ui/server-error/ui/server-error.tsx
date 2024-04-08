import styles from './styles.module.css';

type ServerErrorProps = {
  callback: () => void;
}

const ServerError = ({ callback }: ServerErrorProps): JSX.Element => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <b className={styles.title}>Internal Server Error!</b>
        <p className={styles.description}>
          Oops, looks like something went wrong. Click the button again to refresh this page. If the repeated request failed, please visit us later.
        </p>
        <button
          className={styles.button}
          onClick={callback}
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

export default ServerError;
