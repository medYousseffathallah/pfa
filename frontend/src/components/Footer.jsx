
export default function Footer() {
  const currentYear = new Date().getFullYear();

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
      fontSize: '0.9rem',
      '@media (maxwidth: 768px)': {
        fontSize: '0.8rem',
        padding: '0.6rem 0'
      }
    }}>
      {/* Back-to-top button */}
  
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        style={{
          position: 'absolute',
          left : '20px',
          top: '-20px',
          bottom:'20px',
          background: '#FFD700',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Back to top"
      >
        ↑
      </button>

      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '0.5rem',
          flexWrap: 'wrap',
          '@media (maxwidth: 576px)': {
            flexDirection: 'column',
            gap: '0.5rem'
          }
        }}>
          <a 
            href="http://www.isimm.rnu.tn/public/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              ':hover': { color: '#ff0000' }
            }}
            aria-label="Official website"
          >
            <i className="bi bi-building me-1"></i>
            Site Officiel
          </a>
          
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          
          <a 
            href="https://www.linkedin.com/school/isimm/posts" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              ':hover': { color: '#ff0000' }
            }}
            aria-label="LinkedIn page"
          >
            <i className="bi bi-linkedin me-1"></i>
            LinkedIn
          </a>
          
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
          
          <a 
            href="http://www.isimm.rnu.tn/public/contact" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              ':hover': { color: '#ff0000' }
            }}
            aria-label="Contact us"
          >
            <i className="bi bi-envelope me-1"></i>
            Contact
          </a>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)' }}>
          © {currentYear} ISIM Monastir - Gestion des Clubs Universitaires
        </div>
      </div>
    </footer>
  );
}