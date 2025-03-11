import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
// import Products from './Components/Product';
import ContactUs from './Components/ContactUs';
import Privacy from './Components/Privacy';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        {/* <Route path="/Products" element={<Products/>} /> */}
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Privacy" element={<Privacy/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;