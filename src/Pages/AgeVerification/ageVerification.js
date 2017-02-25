import React, { PropTypes } from 'react';

const propTypes = {
  avStyle: PropTypes.objectOf(PropTypes.string),
  verifyAge: PropTypes.func.isRequired,
};

function AgeVerification({ verifyAge, avStyle }) {
  return (
    <div className="age-verification" style={avStyle}>
      <div className="age-verification-modal">
        <div className="age-verification-modal-description">
          <p>
            18?
          </p>
          <br />
          <br />

        </div>
        <div className="age-verification-modal-buttons-container">
          <a
            href=""
            onClick={verifyAge}
            className="age-verification-modal-buttons-confirm"
          >Confirm</a>
          <a
            href="http://www.google.com"
            className="age-verification-modal-buttons-deny"
          >Deny</a>
        </div>
      </div>
    </div>
  );
}

AgeVerification.propTypes = propTypes;
 export default AgeVerification;
