import React from 'react';
import NavigationPanel from './NavigationPanel';
import AllDoctors from './AllDoctors';

const HomePage = () => (
  <div className="homepage_flex">
    <div className="desk_nav">
      <NavigationPanel />
    </div>
    <section className="doctors_div">
      <AllDoctors />
    </section>
  </div>
);

export default HomePage;
