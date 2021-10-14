import React from 'react';
import '../../App.scss';
import { Navbar } from '../Navbar';
import TopSection from '../TopSection';
import SupportSection from '../SupportSection';
import ExpertiseSection from '../ExpertiseSection';
import ServiceSection from '../ServiceSection';
import TeamsSection from '../TeamsSection';

function Home() {
  return (
    <>
      <Navbar />
      <TopSection />
      <ServiceSection />
      <SupportSection />
      <ExpertiseSection />
      <TeamsSection />
    </>
  );
}

export default Home;
