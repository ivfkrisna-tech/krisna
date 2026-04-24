import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Success from './pages/Success'
import IVF from './pages/IVF'
import IUI from './pages/IUI'
import ICSI from './pages/ICSI'
import Donor from './pages/Donor'
import FertilitySurgery from './pages/FertilitySurgery'
import OurTeam from './pages/OurTeam'
import Certificates from './pages/Certificates'
import LabGallery from './pages/LabGallery'
import Equipment from './pages/Equipment'
import InfertilityAssessment from './pages/InfertilityAssessment'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ivf" element={<IVF />} />
        <Route path="/iui" element={<IUI />} />
        <Route path="/icsi" element={<ICSI />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/fertility_surgery" element={<FertilitySurgery />} />
        <Route path="/our_team" element={<OurTeam />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/clean_room_crtfd_lab" element={<LabGallery />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/infertility_assessment" element={<InfertilityAssessment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  )
}
