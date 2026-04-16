import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import Actions from './pages/Actions'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App