export default function Footer() {
  return (
    <footer>
      <img src="/images/logo.svg" className="logo" />

      <div className="footer-list">
        <a className="list-title">Product</a>

        <p className="element">Overview</p>
        <p className="element">Pricing</p>
        <p className="element">Marketplace</p>
        <p className="element">Features</p>
        <p className="element">Integration</p>
      </div>

      <div className="footer-list">
        <a className="list-title">Comapny</a>

        <p className="element">About</p>
        <p className="element">Team</p>
        <p className="element">Blog</p>
        <p className="element">Careers</p>
      </div>

      <div className="footer-list">
        <a className="list-title">Connect</a>

        <p className="element">Contact</p>
        <p className="element">Newsletter</p>
        <p className="element">LinkedIn</p>
      </div>
    </footer>
  );
}
