import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ModalWarning } from './components/ModalWarning/ModalWarning'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="container">
      <ModalWarning />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
