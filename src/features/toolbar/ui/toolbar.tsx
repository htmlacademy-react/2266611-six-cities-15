import {
  useAppSelector,
  getAuthorizationStatus
} from '../../../shared/lib/redux';
import { AuthorizationStatus } from '../../../shared/enum';
import { memo } from 'react';

import ToolbarLoggedIn from './toolbar-logged-in';
import ToolbarNoAuth from './toolbar-no-auth';

const Toolbar = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {isAuth && <ToolbarLoggedIn />}
        {!isAuth && <ToolbarNoAuth />}

      </ul>
    </nav>
  );
};

const MemoizedToolbar = memo(Toolbar);

export default MemoizedToolbar;
