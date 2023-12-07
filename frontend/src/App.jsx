// Importing the react-router-dom functions
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing the pages
import Home from "./pages/Home"
import Add from "./pages/Add"
import Contact from "./pages/Contact"

// Importing the components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// App render function
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add" element={<Add />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

// Exporting the app function
export default App