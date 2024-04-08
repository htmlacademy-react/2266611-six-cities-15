import clsx from 'clsx';
import { Navigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../shared/lib/utils';
import {
  getComments,
  getPreviewOffers,
  getFullOffer,
  getNearbyOffers,
  getAuthorizationStatus,
  useAppSelector
} from '../../../shared/lib/redux';
import { AuthorizationStatus, AppRoute } from '../../../shared/enum';
import { getSortedComments } from '../../../entities/reviews/model/selectors';
import { MAX_IMAGES_COUNT } from '../const';

import Map from '../../../features/map';
import Feedback from '../../../features/feedback';
import MemoizedBookmark from '../../../features/bookmark';
import MemoizedReview from '../../../entities/reviews';
import MemoizedPremiumBadge from '../../../shared/ui/premium-badge';
import MemoizedStarRating from '../../../shared/ui/star-rating';

const FullOffer = (): JSX.Element => {
  const currentFullOffer = useAppSelector(getFullOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const offers = useAppSelector(getPreviewOffers);
  const currentOffer = [...offers].filter((offer) => offer.id === currentFullOffer?.id);
  const currentAndNearbyOffers = [...nearbyOffers, ...currentOffer];
  const allComments = useAppSelector(getComments);
  const sortedComments = useAppSelector(getSortedComments);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (!currentFullOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  const {
    title,
    description,
    type,
    price,
    images,
    city,
    goods,
    host,
    isPremium,
    isFavorite,
    rating,
    bedrooms,
    maxAdults
  } = currentFullOffer;

  return (
    <section className="offer">

      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, MAX_IMAGES_COUNT).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>

      <div className="offer__container container">
        <div className="offer__wrapper">

          {isPremium && <MemoizedPremiumBadge sectionName="offer" />}

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>

            <MemoizedBookmark
              sectionName="offer"
              offerId={currentFullOffer.id}
              isFavorite={isFavorite}
            />
          </div>

          <MemoizedStarRating
            sectionName="offer"
            rating={rating}
            hasInitialValue
          />

          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalizeFirstLetter(type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
            </li>
          </ul>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>

          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>

          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={clsx('offer__avatar-wrapper user__avatar-wrapper', { 'offer__avatar-wrapper--pro': host.isPro })}>
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {host.name}
              </span>
              {host.isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot;
              <span className="reviews__amount">{allComments.length}</span>
            </h2>

            <ul className="reviews__list">
              {sortedComments.map((sortedComment) => (
                <MemoizedReview
                  key={sortedComment.id}
                  sortedComment={sortedComment}
                />)
              )}
            </ul>

            {authorizationStatus === AuthorizationStatus.Auth && (<Feedback offerId={currentFullOffer.id} />)}

          </section>

        </div>
      </div>

      <Map
        sectionName="offer"
        location={city.location}
        offers={currentAndNearbyOffers}
      />

    </section>
  );
};

export default FullOffer;
