import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/Main';
import AboutSection from './components/About';
import ResumeSection from './components/Resume';
import PortfolioSection from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default App;