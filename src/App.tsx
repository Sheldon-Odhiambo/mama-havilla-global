/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import SeedsOfHope from './components/SeedsOfHope';
import Footer from './components/Footer';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProgramsGrid from './components/ProgramsGrid';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';
import DonateModal from './components/DonateModal';
import VolunteerModal from './components/VolunteerModal';
import AboutDetails from './components/AboutDetails';
import StoryDetails from './components/StoryDetails';
import ProgramDetails from './components/ProgramDetails';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const Home = () => (
    <>
      <Hero onDonateClick={() => setIsDonateOpen(true)} />
      <Features />
      <About />
      <AboutDetails />
      <Stats />
      <ProgramsGrid />
      <SeedsOfHope />
      <Impact />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
    </>
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mama Havillah Global - Changing Lives</title>
        <meta name="description" content="Mama Havillah Global empowers vulnerable children, women, and families through education, healthcare, and community support in Kenya." />
        <meta property="og:title" content="Mama Havillah Global" />
        <meta property="og:description" content="Empowering communities for a brighter future." />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <TopBar />
          <Navbar onDonateClick={() => setIsDonateOpen(true)} onVolunteerClick={() => setIsVolunteerOpen(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id" element={<StoryDetails />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
          </Routes>
          <Footer onVolunteerClick={() => setIsVolunteerOpen(true)} />
          <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
          <VolunteerModal isOpen={isVolunteerOpen} onClose={() => setIsVolunteerOpen(false)} />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

