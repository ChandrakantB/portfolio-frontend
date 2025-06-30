import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AdminMessages from './pages/AdminMessages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminMessages/>} />
        {/* Add others like /projects, /contact */}
      </Routes>
    </Router>
  );
}

export default App;
