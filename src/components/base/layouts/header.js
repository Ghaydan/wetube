import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

const Header = () => {
  function reloadPage() {
    // TODO: redirect to homepage
    window.location.reload();
  };

  return (
    <div>
      <header>
        <div class='header-logo' onClick={reloadPage}>
          <Logo class='logo' />
          <p class='header-title'>WeTube</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
