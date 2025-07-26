import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PunchPage from './pages/PunchPage'
import AdminLogin from './pages/AdminLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/punch" element={<PunchPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  )
}

export default App
