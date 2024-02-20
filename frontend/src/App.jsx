// Importing the react-router-dom functions
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing the pages
import Home from "./pages/Home/Home"
import Add from "./pages/Add/Add"
import Contact from "./pages/Contact/Contact"
import Home2 from "./pages/Home2/Home2"

// Importing the components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// App render function
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

// Exporting the app function
export default App