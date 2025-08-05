// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';


function App() {
  return (
    <div className="">
      {/* <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
