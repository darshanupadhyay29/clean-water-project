import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnMorePage from './pages/LearnMorePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import './index.css';
import BlogSection from './components/BlogSection';
import WaterUsageCalculator from './pages/WaterUsageCalculator';
import GovernmentSchemes from './pages/GovernmentSchemes';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goverment_schemes" element={<GovernmentSchemes />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/water_usage" element={<WaterUsageCalculator />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
