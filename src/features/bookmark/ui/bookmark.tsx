import clsx from 'clsx';
import { getIconSize } from '../lib/get-icon-size';

type BookmarkProps = {
  sectionName: string;
  isFavorite: boolean;
}

const Bookmark = ({ sectionName, isFavorite }: BookmarkProps): JSX.Element => {
  const { width, height } = getIconSize(sectionName);

  return (
    <button className={clsx(`${sectionName}__bookmark-button`, {
      [`${sectionName}__bookmark-button--active`]: isFavorite,
    }, 'button')} type="button"
    >
      <svg className={`${sectionName}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default Bookmark;
