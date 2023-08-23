import React from 'react';
import NavigationPanel from './NavigationPanel';
import AllDoctors from './AllDoctors';

const HomePage = () => (
  <div>
    <div>
      <NavigationPanel />
    </div>
    <div>
      <AllDoctors />
    </div>
  </div>
);

export default HomePage;
