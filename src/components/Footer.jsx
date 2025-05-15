 import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>our partners :</h4>
            <ul>
              <li>
                <a href="http://www.radio2m.ma/">
                  <img
                    src="../photos/Logo@2x.df151f1.png"
                    alt="2M radio"
                  />
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/">
                  <img src="../photos/spotify.png" alt="spotify" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>about us :</h4>
            <ul>
              <div className="social-links">
                <a href="https://www.facebook.com/UH2M.FSBM/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/clubcinema.fsbm/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://chat.whatsapp.com/BTGvcigoLMVH3OH3zhIpQB">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contactez directement notre support :</h4>
            <ul>
              <li className="support">&#128231;
                <a
                  href="mailto:tabiteanwar@cinemaclub.team"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Tabite Anwar
                </a>
              </li>
              <li className="support">&#128231;
                <a
                  href="mailto:rafikabdellah@cinemaclub.team"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Rafik Abdellah
                </a>
              </li>
              <li className="support">&#128231;
                <a
                  href="mailto:slimanianwar@cinemaclub.team"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Slimani Anwar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
