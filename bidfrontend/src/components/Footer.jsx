import React from 'react';

function Footer() {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className='bb'>À propos de nous</h3>
          <p>Site des encheres en ligne halal.</p>
        </div>

        <div className="footer-section">
          <h3 className='bb'>Contact</h3>
          <p> contact@example.com</p>
          <p> +2127 666 567 890</p>
        </div>

        <div className="footer-section">
          <h3 className='bb'>Liens utiles</h3>
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ENSAM</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
