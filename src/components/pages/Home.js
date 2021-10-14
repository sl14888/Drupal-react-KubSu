import React from 'react';
import '../../App.scss';
import { Navbar } from '../Navbar';
import TopSection from '../TopSection';
import SupportSection from '../SupportSection';
import ExpertiseSection from '../ExpertiseSection';

function Home() {
  return (
    <>
      <Navbar />
      <TopSection />
      <SupportSection />
      <ExpertiseSection />
    </>
  );
}

export default Home;
