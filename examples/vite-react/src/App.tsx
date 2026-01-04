import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Assets from './pages/Assets';
import Galleries from './pages/Galleries';
import Upload from './pages/Upload';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">Fairu SDK Demo</div>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/assets">Assets</Link></li>
          <li><Link to="/galleries">Galleries</Link></li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
