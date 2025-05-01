import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import Footer from './Footer';
import Header from './Header';
const upcomingEvents = [
  {
    id: 1,
    title: "Composition de Programmation",
    date: "15 Mars 2024",
    location: "Amphi A1",
    description: "Participez à notre compétition annuelle de codage",
    club: "Club Informatique",
    image: "/event1.jpg" // Path to your image in public folder
  },
  {
    id: 2,
    title: "Forum Mathématique",
    date: "22 Avril 2024",
    location: "Espace Culturel",
    description: "Conférences et ateliers pratiques",
    club: "Club Mathématiques",
    image: "/event2.jfif"
  },
  {
    id: 3,
    title: "Journée Portes Ouvertes",
    date: "5 Mai 2024",
    location: "Campus Principal",
    description: "Découverte des activités des clubs",
    club: "Bureau des Étudiants",
    image: "/event3.jfif"
  },
];
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
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/04/24/23/20250424231359-SAWVGTQD.js"; 
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); 

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
         
        </div>
      </main>

      <div className="isimm-info">
        <div className="about-section">
          <h2>À propos de l'ISIMM</h2>
          <p>
            L'Institut Supérieur d'Informatique et de Mathématiques de Monastir (ISIMM) 
            est un établissement universitaire tunisien rattaché à l'Université de Monastir.
          </p>
          <div className="highlights">
            <div className="highlight-card">
              <h3>Formations</h3>
              <ul>
                <li>Licences Fondamentales</li>
                <li>Licences Appliquées</li>
                <li>Masters</li>
                <li>Doctorats</li>
              </ul>
            </div>
            <div className="highlight-card">
              <h3>Départements</h3>
              <ul>
                <li>Informatique</li>
                <li>Mathématiques</li>
                <li>Technologies de l'Information</li>
              </ul>
            </div>
            <div className="highlight-card">
              <h3>Vie Étudiante</h3>
              <ul>
                <li>Clubs universitaires</li>
                <li>Activités culturelles</li>
                <li>Événements scientifiques</li>
              </ul>
            </div>
          </div>
          <a href="http://www.isimm.rnu.tn/public/" target="_blank" rel="noopener noreferrer" className="official-link">
            Visiter le site officiel de l'ISIMM
          </a>
        </div>

        <div className="news-section">
          <h2>Actualités des Clubs</h2>
          
          <div className="events-container">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image-container">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="event-image small-image"
                  />
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <div className="event-club">
                    <span>{event.club}</span>
                    <button className="details-btn">Voir détails</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="news-card">
            <h3>Inscriptions ouvertes</h3>
            <p>Rejoignez les clubs universitaires pour l'année 2024-2025.</p>
          </div>
        </div>
      </div>


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
