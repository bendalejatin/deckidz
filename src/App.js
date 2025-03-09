import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
// import Products from './Components/Products';
import ContactUs from './Components/ContactUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Products" element={<h1>Products</h1>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;