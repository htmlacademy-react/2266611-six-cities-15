import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Place from '../../widgets/place';
import NearPlaces from '../../widgets/near-places';
import { getFullOffer } from '../../mocks/full-offers';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../shared/const';
import { Comment } from '../../shared/types/comment';

type OfferProps = {
  comments: Comment[];
}

const Offer = ({ comments }: OfferProps): JSX.Element => {
  const { id: offerId } = useParams();
  const currentOffer = getFullOffer(offerId);
  const currentComments = comments.filter((comment) => comment.id === offerId);

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

          <Place
            offer={currentOffer}
            currentComments={currentComments}
          />

          <div className="container">
            <NearPlaces />
          </div>

        </main>
      }
      footer={false}
    />
  );
};

export default Offer;
