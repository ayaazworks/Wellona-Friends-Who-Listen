import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PolicyPage from './pages/PolicyPage'
import { terms } from './data/terms'
import { privacy } from './data/privacy'
import { refund } from './data/refund'
import { childSafety } from './data/childSafety'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="terms" element={<PolicyPage data={terms} accentColor="#A43DFF" />} />
          <Route path="privacy" element={<PolicyPage data={privacy} accentColor="#2F8FFF" />} />
          <Route path="refund" element={<PolicyPage data={refund} accentColor="#FF2BD6" />} />
          <Route path="child-safety" element={<PolicyPage data={childSafety} accentColor="#00D26A" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}