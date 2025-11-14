function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Aiclex Technologies</h3>
            <p>Transforming ideas into digital reality</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                Facebook
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                Twitter
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                LinkedIn
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Aiclex Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
