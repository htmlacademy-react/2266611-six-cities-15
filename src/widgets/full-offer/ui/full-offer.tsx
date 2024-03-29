import Map from '../../../features/map';
import Feedback from '../../../features/feedback';
import Bookmark from '../../../features/bookmark';
import Review from '../../../entities/review';
import PremiumBadge from '../../../shared/ui/premium-badge';
import StarRating from '../../../shared/ui/star-rating';
import { capitalizeFirstLetter } from '../../../shared/lib';
import { AuthorizationStatus } from '../../../shared/const';
import { getAuthorizationStatus } from '../../../mocks/authorization-status';
import { FullOfferType } from '../../../shared/types/offer';
import { PreviewOfferType } from '../../../shared/types/offer';
import { Comment } from '../../../shared/types/comment';
import { sortByDate } from '../lib/sort-by-date';
import { MAX_COMMENT_COUNT } from '../const/const';

type FullOfferProps = {
  currentOffer: FullOfferType;
  comments: Comment[];
  offers: PreviewOfferType[];
}

const FullOffer = ({ currentOffer, comments, offers }: FullOfferProps): JSX.Element => {
  const authorizationStatus = getAuthorizationStatus();
  const sortedComments = [...comments].sort(sortByDate).slice(0, MAX_COMMENT_COUNT);
  const nearOffers = [...offers].filter((offer) => offer.city.name === currentOffer.city.name).slice(0, 4);

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
  } = currentOffer;

  return (
    <section className="offer">

      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>

      <div className="offer__container container">
        <div className="offer__wrapper">

          {isPremium && <PremiumBadge sectionName="offer" />}

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>

            <Bookmark
              sectionName="offer"
              isFavorite={isFavorite}
            />
          </div>

          <StarRating
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
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
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
              <span className="reviews__amount">{sortedComments.length}</span>
            </h2>

            <ul className="reviews__list">
              {sortedComments.map((sortedComment) => (
                <Review
                  key={sortedComment.id}
                  sortedComment={sortedComment}
                />)
              )}
            </ul>

            {authorizationStatus === AuthorizationStatus.Auth && (<Feedback />)}

          </section>

        </div>
      </div>

      <Map
        sectionName="offer"
        balloonId={currentOffer.id}
        city={city}
        offers={nearOffers}
      />

    </section>
  );
};

export default FullOffer;
