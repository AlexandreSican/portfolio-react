import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Header } from './pages/Header'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'
import './styles/global.css'

function App() {

  return (
    <div className='overflow-y-hidden overflow-x-hidden max-h-screen relative'>
      <BrowserRouter>
      
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
