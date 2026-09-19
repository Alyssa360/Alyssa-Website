import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar/navbar'
import Home from './components/Home/home'
import Experience from './components/Experience/experience'
import About from './components/About/about'
import Footer from './components/Footer/footer'

import './App.css'

function App() {
    return (
        <BrowserRouter basename="/Alyssa-Website">
            <div className="app">
                <Navbar />

                <main className="page_content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
