import Logo from '../../../shared/ui/logo';
import { AppRoute } from '../../../shared/const';

const Footer = (): JSX.Element => (
  <footer className="footer container">
    <Logo
      type="footer"
      to={AppRoute.Root}
    />
  </footer>
);

export default Footer;
