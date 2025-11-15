import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import PainPointsSection from './components/PainPointsSection';
import TeamMemberProfile from './components/TeamMemberProfile';
import CaseStudySection from './components/CaseStudySection';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-black overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Logos />
                <Features />
                <PainPointsSection />
                <TeamMemberProfile />
                <CaseStudySection />
              </>
            } />
            <Route path="/appointments" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer aria-label="Toast notifications" />
      </div>
    </Router>
  );
};

export default App;
