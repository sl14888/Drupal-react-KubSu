import React from 'react';
import '../../App.scss';
import { Navbar } from '../Navbar';
import TopSection from '../TopSection';
import SupportSection from '../SupportSection';
import ExpertiseSection from '../ExpertiseSection';
import ServiceSection from '../ServiceSection';
import TeamsSection from '../TeamsSection';
import CasesSection from '../CasesSection';

function Home() {
  return (
    <>
      <Navbar />
      <TopSection />
      <ServiceSection />
      <SupportSection />
      <ExpertiseSection />
      <TeamsSection />
      <CasesSection />
    </>
  );
}

export default Home;
