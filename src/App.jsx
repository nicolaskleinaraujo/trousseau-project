import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Add from "./pages/Add"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add" element={<Add />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App