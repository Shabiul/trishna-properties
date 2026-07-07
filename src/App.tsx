import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <SmoothScrollProvider>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/listings/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </SmoothScrollProvider>
        <ScrollToTop />
      </div>
    </Router>
  );
}
