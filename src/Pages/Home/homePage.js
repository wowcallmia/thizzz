import React from 'react';

import HomepageHeader from './homeComponents/homepage_header';
import HomepagePopJuices from './homeComponents/homepage_popJuices';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="silly2">
      </div>
      {/* <div className="silly3">x</div> */}
      <HomepagePopJuices />
      <HomepageHeader />

    </div>
  );
}
