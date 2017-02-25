import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
};

function NavbarMobileOptionsCurrencyDropdnYen({ onCurrencyChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onCurrencyChange('yen');
  }

  return (
    <a
      href=""
      onClick={preventDefault}
      className="mobile-currency-dropdown-content-yen"
    >
      
    </a>
  );
}

NavbarMobileOptionsCurrencyDropdnYen.propTypes = propTypes;
export default NavbarMobileOptionsCurrencyDropdnYen;
