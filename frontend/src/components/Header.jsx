  import ChatPopup from "./Chat";
  const Header = ({ isAuthenticated, setIsAuthenticated, setShowLogin, setShowRegister }) => {
    return (
      <header className="compact-header">
        <div className="header-content">
          <div className="logo-title">
            <img src="/logo_isimm.png" alt="Logo" className="header-logo" />
            <h1 >/</h1>
            <h1 >Gestion des Clubs Universitaires</h1>
          </div>
          
          <div className="auth-buttons">
        
            {isAuthenticated ? (
              <button onClick={() => setIsAuthenticated(false)}
              className="auth-btn login-btn"
            >
              Déconnexion 
            </button>
            
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  
                  className="auth-btn login-btn"
                >
                  Connexion
                </button>
                <button
                  onClick={() => setShowRegister(true)}
                  className="auth-btn register-btn"
                >
                  Inscription
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };
  export default Header;