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
          <b className={styles.title}>Rental offers request error!</b>
          <p className={styles.description}>
            Сlick on the button to re-request a list of rental offers. If the repeated request did not help, then visit us later.
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
