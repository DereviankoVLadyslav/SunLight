import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import AutomotiveLogistics from './pages/AutomotiveLogistics.jsx'
import SolarEnergySystems from './pages/SolarEnergySystems.jsx'
import IndustrialEquipment from './pages/IndustrialEquipment.jsx'
import SustainableInvestments from './pages/SustainableInvestments.jsx'
import ProjectDevelopment from './pages/ProjectDevelopment.jsx'
import SoftwareDevelopment from './pages/SoftwareDevelopment.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automotive-logistics" element={<AutomotiveLogistics />} />
        <Route path="/solar-energy-systems" element={<SolarEnergySystems />} />
        <Route path="/industrial-equipment" element={<IndustrialEquipment />} />
        <Route path="/sustainable-investments" element={<SustainableInvestments />} />
        <Route path="/project-development" element={<ProjectDevelopment />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
