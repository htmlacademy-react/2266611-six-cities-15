import { AppRoute } from '../../../shared/enum';

import Logo from '../../../shared/ui/logo';

const Footer = (): JSX.Element => (
  <footer className="footer container">
    <Logo
      type="footer"
      to={AppRoute.Root}
    />
  </footer>
);

export default Footer;
