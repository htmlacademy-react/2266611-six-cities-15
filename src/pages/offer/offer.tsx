import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';
import { getFullOffer } from '../../mocks/full-offers';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../shared/const';
import { Comment } from '../../shared/types/comment';
import { PreviewOfferType } from '../../shared/types/offer';

type OfferProps = {
  offers: PreviewOfferType[];
  comments: Comment[];
}

const Offer = ({ offers, comments }: OfferProps): JSX.Element => {
  const { id: offerId } = useParams();
  const currentOffer = getFullOffer(offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <Layout
      wrapper="page"
      title="6 cities: offer"
      header={<Header />}
      content={
        <main className="page__main page__main--offer">

          <FullOffer
            currentOffer={currentOffer}
            comments={comments}
            offers={offers}
          />

          <div className="container">
            <NearOffers
              currentOffer={currentOffer}
              offers={offers}
            />
          </div>

        </main>
      }
      footer={false}
    />
  );
};

export default Offer;
