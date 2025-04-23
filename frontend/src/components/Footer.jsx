export default function Footer() {
  return (
      <footer style={{
          padding: "0.8rem 0",
          background: "linear-gradient(to right, #1a365d, #2a4e7f)",
          color: "white",
          textAlign: 'center',
          position: 'fixed',
          width: '100%',
          bottom: '0',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          zIndex: '1000',
          fontSize: '0.9rem'
      }}>
          <div className="container">
              <div className="d-flex justify-content-center gap-4 mb-2">
                  <a href="https://www.isimm.rnu.tn/public/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-white text-decoration-none hover-gold">
                      <i className="bi bi-building me-1"></i> Site Officiel
                  </a>
                  
                  <span className="text-light">|</span>
                  
                  <a href="https://www.linkedin.com/school/isimm/posts" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-white text-decoration-none hover-gold">
                      <i className="bi bi-linkedin me-1"></i> LinkedIn
                  </a>
                  
                  <span className="text-light">|</span>
                  
                  <a href="http://www.isimm.rnu.tn/public/contact" 
                  target="_blank"
                  rel="noopener noreferrer"
                     className="text-white text-decoration-none hover-gold">
                      <i className="bi bi-envelope me-1"></i> Contact
                  </a>
              </div>
              <div className="text-light">
                  © {new Date().getFullYear()} ISIM Monastir - Gestion des Clubs Universitaires
              </div>
          </div>
      </footer>
  )
}