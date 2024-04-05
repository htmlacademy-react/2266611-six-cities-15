import { useActionCreators } from '../../../shared/lib/redux';
import { offersActions } from '../../../entities/offers';
import styles from './styles.module.css';

const ErrorOffers = (): JSX.Element => {
  const { fetchPreviewOffers } = useActionCreators(offersActions);

  const handleButtonClick = () => {
    fetchPreviewOffers();
  };

  return (
    <div className="cities">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <b className={styles.title}>Internal Server Error!</b>
          <p className={styles.description}>
            Click the button again to request a list of rental offers. If the repeated request failed, please visit us later.
          </p>
          <button
            className={styles.button}
            onClick={handleButtonClick}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorOffers;
