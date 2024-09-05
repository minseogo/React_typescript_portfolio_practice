import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/Main';



const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;