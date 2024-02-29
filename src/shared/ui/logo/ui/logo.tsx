import { Link } from 'react-router-dom';
import getLogoSize from '../lib';

type LogoProps = {
  type: 'header' | 'footer';
  isActive?: boolean;
  to: string;
}

const Logo = ({ type, isActive = false, to }: LogoProps): JSX.Element => {
  const logoSize = getLogoSize(type);

  if (isActive) {
    return (
      <a className={`${type}__logo-link ${type}__logo-link--active`}>
        <img
          className={`${type}__logo`}
          src="img/logo.svg"
          alt="6 cities logo"
          width={logoSize.width}
          height={logoSize.height}
        />
      </a>
    );
  }

  return (
    <Link className={`${type}__logo-link`} to={to}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
};

export default Logo;
