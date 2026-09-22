import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Learning from '../pages/Learning'
import Activities from '../pages/Activities'
import Gallery from '../pages/Gallery'
import Admissions from '../pages/Admissions'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Portal from '../pages/Portal'
import LegalPlaceholder from '../pages/LegalPlaceholder'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/privacy" element={<LegalPlaceholder title="Privacy Policy" path="/privacy" />} />
        <Route path="/terms" element={<LegalPlaceholder title="Terms & Conditions" path="/terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
