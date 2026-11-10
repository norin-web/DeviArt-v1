import { Link } from "react-router";
import { ChevronUp } from "lucide-react";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__in">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={34} height={34} />
              <span>{site.brand}</span>
            </Link>
            <p>AI art generator for iPhone. Text prompts, reference photos, sketches and 13 art styles.</p>
            <Btn href={app.url}>Download on the App Store</Btn>
          </div>
          <div className="footer__cols">
            <nav className="footer__col" aria-label="Navigate">
              <span className="footer__h">Navigate</span>
              <Link to="/">Home</Link>
              <Link to="/app">App</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <nav className="footer__col" aria-label="Help">
              <span className="footer__h">Help</span>
              <Link to="/support">Support</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </nav>
          </div>
          <div className="footer__contact">
            <span className="footer__h">Contact</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>Operated by {site.operator}, Berlin, Germany</span>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">{site.brand}</div>
        <div className="footer__bottom">
          <span>© {site.year} {site.operator}. DeviantArt name and logo used under authorization from DeviantArt, Inc.</span>
          <button className="footer__top-btn" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <ChevronUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
