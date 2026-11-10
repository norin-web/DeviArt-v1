import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { app, appFeatures, aso, site, specs } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function OurApp() {
  const track = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
      setSlide(Math.round(el.scrollLeft / (w + 12)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const move = (dir: number) => {
    const el = track.current;
    const w = (el?.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
    el?.scrollBy({ left: dir * (w + 20), behavior: "smooth" });
  };

  return (
    <>
      <section className="phero">
        <div className="phero__text">
          <span className="tag">The app</span>
          <Split as="h1" className="h1" parts={[["Your AI art studio on iPhone"]]} />
          <Reveal as="p" className="lead" delay={200}>Create, sketch, take the daily challenge and keep every piece in your library.</Reveal>
          <Reveal className="phero__row" delay={300}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <span className="dl-note">Free to download</span>
          </Reveal>
        </div>
        <div className="phero__phones" aria-hidden="true">
          <img className="phero__side phero__side--l phone" src={img("/images/phone-sketch.webp")} alt="" width={270} height={552} />
          <img className="phero__side phero__side--r phone" src={img("/images/phone-challenge.webp")} alt="" width={270} height={552} />
          <img className="phero__main phone" src={img("/images/phone-create.webp")} alt="" width={320} height={654} />
        </div>
        <div className="phero__fade" aria-hidden="true" />
      </section>

      <section className="reel" aria-label="App Store screenshots">
        <div className="container reel__head">
          <Reveal as="h2" className="h2">On the App Store</Reveal>
          <div className="reel__arrows">
            <button aria-label="Previous screenshot" onClick={() => move(-1)}><ChevronLeft size={20} /></button>
            <button aria-label="Next screenshot" onClick={() => move(1)}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="reel__track" ref={track} tabIndex={0}>
          {aso.map((src, i) => (
            <img key={src} src={img(src)} alt={`${site.brand} App Store screenshot ${i + 1}`} width={276} height={600} loading="lazy" />
          ))}
        </div>
        <div className="reel__dots" aria-hidden="true">
          {aso.map((src, i) => <i key={src} className={slide === i ? "is-on" : ""} />)}
        </div>
      </section>

      <div className="container">
        <div className="frows">
          {appFeatures.map((f, i) => (
            <Reveal className={`card frow${i % 2 ? " frow--flip" : ""}`} key={f.n}>
              <div className="frow__text">
                <span className="num">{f.n}</span>
                <h2 className="h3">{f.title}</h2>
                <p className="lead">{f.text}</p>
              </div>
              <img className="frow__phone phone" src={img(f.img)} alt={`${f.title} screen`} width={300} height={613} loading="lazy" />
            </Reveal>
          ))}
        </div>

        <section className="specs">
          <div className="specs__title">
            <Reveal as="h2" className="h2">The details</Reveal>
            <p className="p">Store details update once the app is live on the App Store.</p>
          </div>
          <dl className="specs__table">
            {specs.map(([k, v]) => (
              <Reveal className="specs__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Reveal>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
