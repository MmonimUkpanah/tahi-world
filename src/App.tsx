// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="">
      {/* <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
