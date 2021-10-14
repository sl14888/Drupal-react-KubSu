import React from 'react';
import '../../App.scss';
import Navbar from '../Navbar';
import SupportSection from '../SupportSection';
import ServiceSection from '../ServiceSection';

function Support() {
  return (
    <>
      <Navbar navbarStyle="navbar-bg" />
      <ServiceSection />
      <SupportSection />
    </>
  );
}

export default Support;
