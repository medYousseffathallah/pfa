/*import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              isAuthenticated={isAuthenticated} 
              setIsAuthenticated={setIsAuthenticated} 
            />} 
          />
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;*/
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          
        </Routes>
      </main>
    </div>
  );
};

export default App;