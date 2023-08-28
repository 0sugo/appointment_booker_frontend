import React from 'react';
import NavigationPanel from './navigation/NavigationPanel';
import AllDoctors from './AllDoctors';
import MobileNav from './navigation/MobileNav';

const HomePage = () => (
  <div className="homepage_flex">
    <div className="mobile_na">
      <MobileNav />
    </div>
    <div className="desk_nav">
      <NavigationPanel />
    </div>
    <section className="doctors_div">
      <AllDoctors />
    </section>
  </div>
);

export default HomePage;
