import React from 'react';
import Hero from './components/Hero';
import ResearchBackground from './components/ResearchBackground';
import Importance from './components/Importance';
import Statistics from './components/Statistics';
import KeyFeatures from './components/KeyFeatures';
import Survey from './components/Survey';
import Effects from './components/Effects';
import CauseAnalysis from './components/CauseAnalysis';
import Direction from './components/Direction';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ResearchBackground />
      <Importance />
      <Statistics />
      <KeyFeatures />
      <Survey />
      <Effects />
      <CauseAnalysis />
      <Direction />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
