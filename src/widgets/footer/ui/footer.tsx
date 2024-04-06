import { AppRoute } from '../../../shared/enum';
import { memo } from 'react';

import MemoizedLogo from '../../../shared/ui/logo';

const Footer = (): JSX.Element => (
  <footer className="footer container">
    <MemoizedLogo
      type="footer"
      to={AppRoute.Root}
    />
  </footer>
);

const MemoizedFooter = memo(Footer);

export default MemoizedFooter;
