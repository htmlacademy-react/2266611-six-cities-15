import clsx from 'clsx';
import { memo } from 'react';
import { getIconSize } from '../lib/get-icon-size';
import { useActionCreators, useAppSelector, getAuthorizationStatus, getFavoriteOfferStatusObject } from '../../../shared/lib/redux';
import { offersActions, FavoriteOfferStatus } from '../../../entities/offers';
import { AuthorizationStatus, AppRoute } from '../../../shared/enum';
import { useNavigate } from 'react-router-dom';

type BookmarkProps = {
  sectionName: string;
  offerId: string;
  isFavorite: boolean;
}

const Bookmark = ({ sectionName, offerId, isFavorite }: BookmarkProps): JSX.Element => {
  const navigate = useNavigate();
  const { width, height } = getIconSize(sectionName);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOfferStatus = useAppSelector(getFavoriteOfferStatusObject);
  const { changeFavoriteOfferStatus } = useActionCreators(offersActions);

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      changeFavoriteOfferStatus({ offerId, status: isFavorite ? FavoriteOfferStatus.Delete : FavoriteOfferStatus.Add });
      return;
    }

    return navigate(AppRoute.Login, { replace: true });
  };

  return (
    <button
      className={clsx(`${sectionName}__bookmark-button`, {
        [`${sectionName}__bookmark-button--active`]: isFavorite,
      }, 'button')}
      type="button"
      onClick={handleBookmarkClick}
      disabled={favoriteOfferStatus.isLoading}
    >
      <svg className={`${sectionName}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
};

const MemoizedBookmark = memo(Bookmark);

export default MemoizedBookmark;
