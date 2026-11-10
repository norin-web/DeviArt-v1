import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav, app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

/** Header stays on screen at all times; it only gains a backdrop once the page scrolls. */
export default function Header() {
  const { pathname } = useLocation();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setSolid(scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header className={`header${solid || open ? " is-solid" : ""}`}>
        <div className="header__bar">
          <div className="header__brand">
            <Link to="/" className="logo" aria-label={`${site.brand} home`}>
              <img src={img("/images/app-icon.png")} alt="" width={34} height={34} />
              <span>{site.brand}</span>
            </Link>
          </div>
          <nav className="header__nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `navlink${isActive || (n.to === "/contact" && pathname.startsWith("/feedback")) ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__end">
            <Btn href={app.url} size="sm">
              <span className="only-wide">Download</span>
              <span className="only-narrow">Get</span>
            </Btn>
            <button
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mmenu"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
            {n.label}
          </Link>
        ))}
        <Btn href={app.url}>Download on the App Store</Btn>
      </div>
    </>
  );
}
