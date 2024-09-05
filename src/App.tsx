import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/Main';
import AboutSection from './components/About';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;