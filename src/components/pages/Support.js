import React from 'react';
import '../../App.scss';
import Navbar from '../Navbar';
import SupportSection from '../SupportSection';

function Support() {
  return (
    <>
      <Navbar navbarStyle="navbar-bg" />
      <SupportSection />
      <SupportSection />
      <SupportSection />
      <SupportSection />
    </>
  );
}

export default Support;
