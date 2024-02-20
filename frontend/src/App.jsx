// Modules
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// Pages
import Home from "./pages/Home/Home"
import Add from "./pages/Add/Add"
import Contact from "./pages/Contact/Contact"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App