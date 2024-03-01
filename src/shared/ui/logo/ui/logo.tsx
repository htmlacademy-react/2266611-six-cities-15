import { Link } from 'react-router-dom';
import getLogoSize from '../lib';

type LogoProps = {
  type: 'header' | 'footer';
  isActive?: boolean;
  to: string;
}

type LogoSizeProps = {
  width: number;
  height: number;
}

const createImage = (type: string, logoSize: LogoSizeProps): JSX.Element => (
  <img
    className={`${type}__logo`}
    src="img/logo.svg"
    alt="6 cities logo"
    width={logoSize.width}
    height={logoSize.height}
  />
);

const Logo = ({ type, isActive = false, to }: LogoProps): JSX.Element => {
  const logoSize = getLogoSize(type);

  if (isActive) {
    return (
      <a className={`${type}__logo-link ${type}__logo-link--active`}>
        {createImage(type, logoSize)}
      </a>
    );
  }

  return (
    <Link className={`${type}__logo-link`} to={to}>
      {createImage(type, logoSize)}
    </Link>
  );
};

export default Logo;
