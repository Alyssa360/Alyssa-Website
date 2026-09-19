import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar/navbar'
import Home from './components/Home/home'
import Experience from './components/Experience/experience'
import About from './components/About/about'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
