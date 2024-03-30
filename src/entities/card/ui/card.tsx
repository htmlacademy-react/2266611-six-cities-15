import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { TPreviewOffer } from '../../../shared/types/offer';
import { capitalizeFirstLetter } from '../../../shared/lib/utils';
import { AppRoute } from '../../../shared/const';
import { getImageSize } from '../lib/get-image-size';
import { Nullable } from 'vitest';

import StarRating from '../../../shared/ui/star-rating';
import PremiumBadge from '../../../shared/ui/premium-badge';

type CardProps = {
  offer: TPreviewOffer;
  sectionName: string;
  userAction: ReactNode;
  onCardHover?: (offer: Nullable<TPreviewOffer>) => void;
}

const Card = ({ offer, sectionName, userAction, onCardHover }: CardProps): JSX.Element => {
  const { id, title, type, price, previewImage, isPremium, rating } = offer;
  const { width, height } = getImageSize(sectionName);

  return (
    <article
      className={clsx(`${sectionName}__card`, 'place-card')}
      onMouseEnter={() => onCardHover?.(offer)}
      onMouseLeave={() => onCardHover?.(null)}
    >

      {/* Premium значок */}
      {isPremium && <PremiumBadge sectionName="place-card" />}

      {/* Изображение-ссылка */}
      <div className={clsx(`${sectionName}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={generatePath(AppRoute.Offer, { id: id })}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">

          {/* Цена */}
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {/* Кнопка "Добавить в закладки" */}
          {userAction}

        </div>

        {/* Звёздный рейтинг */}
        <StarRating sectionName='place-card' rating={rating} />

        {/* Заголовок-ссылка */}
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: id })}>{title}</Link>
        </h2>

        {/* Тип жилья */}
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>

    </article>
  );
};

export default Card;
