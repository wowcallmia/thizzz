import React, { PropTypes } from 'react';

const propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

function NavbarOptionsLanguageDropdnEnglish({ onLanguageChange }) {
  function preventDefault(e) {
    e.preventDefault();
    onLanguageChange('english');
  }
  return (
    <a
      href=""
      onClick={preventDefault}
      className="language-dropdown-content-us"
    >
      <div className="language-dropdown-content-us-image" />
      <div className="language-dropdown-content-us-english">
        <span>English</span>
      </div>
    </a>

  );
}

NavbarOptionsLanguageDropdnEnglish.propTypes = propTypes;
export default NavbarOptionsLanguageDropdnEnglish;
