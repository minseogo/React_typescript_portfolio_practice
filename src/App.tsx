import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/Main';
import AboutSection from './components/About';
import ResumeSection from './components/Resume';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ResumeSection />
      <Footer />
    </div>
  );
};

export default App;