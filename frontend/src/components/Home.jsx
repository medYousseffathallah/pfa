import { useState,useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import Footer from './Footer'
import Header from './Header';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    regName: '',
    regEmail: '',
    regPassword: ''
  });

  useEffect(() => {
    console.log("ShowLogin state:", showLogin);
  }, [showLogin]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post('http://localhost:3001/login', {
        email: formData.loginEmail,
        password: formData.loginPassword
      });
      if (result.data === "Success") {
        setIsAuthenticated(true);
        setShowLogin(false);
      } else {
        setErrors({ login: 'Invalid credentials' });
      }
    } catch (err) {
      setErrors({ login: 'Login failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post('http://localhost:3001/register', {
        name: formData.regName,
        email: formData.regEmail,
        password: formData.regPassword
      });
      if (result.data === "Already registered") {
        setErrors({ register: 'Email already registered' });
      } else {
        alert('Registration successful! Please login.');
        setShowRegister(false);
        setShowLogin(true);
      }
    } catch (err) {
      setErrors({ register: 'Registration failed' });
    } finally {
      setIsLoading(false);
    }
    console.log("showLogin:", showLogin, "setShowLogin:", typeof setShowLogin);

  };

  return (
    
    <div className="university-page">

      
   <Header
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      setShowLogin={setShowLogin}
      setShowRegister={setShowRegister}
    />

    <main className="main-content">
      <div className="hero-section">
        <h1>Bienvenue à l'ISSIMM</h1>
        <p>Gestion des clubs universitaires</p>
        
        <div className="auth-triggers">
          
        </div>
      </div>


    </main>
    
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Connexion</h3>
              <button onClick={() => setShowLogin(false)} className="close-btn">
                &times;
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email Universitaire</label>
                <input
                  type="email"
                  name="loginEmail"
                  value={formData.loginEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.login && <p className="error">{errors.login}</p>}
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
              <p className="modal-footer-text">
                Pas de compte?{' '}
                <button 
                  type="button" 
                  className="text-link"
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                >
                  S'inscrire
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

    
      {showRegister && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Inscription</h3>
              <button onClick={() => setShowRegister(false)} className="close-btn">
                &times;
              </button>
            </div>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>Nom Complet</label>
                <input
                  type="text"
                  name="regName"
                  value={formData.regName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Universitaire</label>
                <input
                  type="email"
                  name="regEmail"
                  value={formData.regEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  name="regPassword"
                  value={formData.regPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.register && <p className="error">{errors.register}</p>}
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Inscription...' : "S'inscrire"}
              </button>
              <p className="modal-footer-text">
                Déjà inscrit?{' '}
                <button 
                  type="button" 
                  className="text-link"
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                >
                  Se connecter
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
export default Home;