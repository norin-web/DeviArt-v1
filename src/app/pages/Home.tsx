import { useEffect, useState } from "react";
import { app, createSubs, facts, features, gallery, site, steps, styles, tour, worksWith } from "../content/site";
import { img } from "../utils/img";
import { useScrollVar } from "../utils/motion";
import Btn from "../components/Btn";
import Icon from "../components/Icon";
import QrCta from "../components/QrCta";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const TAB_MS = 6000;

export default function Home() {
  const heroRef = useScrollVar<HTMLElement>();
  const beamRef = useScrollVar<HTMLDivElement>();
  const [tab, setTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const [style, setStyle] = useState(0);

  // tour tabs advance on their own until the visitor picks one
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setTab((tab + 1) % tour.length), TAB_MS);
    return () => clearTimeout(t);
  }, [tab, paused]);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <h1 className="hero__words grad" aria-label="Dreams into reality">
          {/* line breaks differ: "Dreams into / reality" on desktop, "Dreams / into reality" on phones */}
          <span className="only-wide" aria-hidden="true">Dreams into<br />reality</span>
          <span className="only-narrow" aria-hidden="true">Dreams<br />into reality</span>
        </h1>
        <img className="hero__phone phone" src={img("/images/phone-home.webp")} alt={`${site.brand} home screen with today's challenge and the gallery`} width={350} height={716} />
        <div className="hero__fade" aria-hidden="true" />
        <div className="hero__lead">
          <span className="tag">{app.category}</span>
          <p>Type an idea, add a photo or a sketch, pick a style. {site.brand} turns it into artwork in seconds.</p>
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="dl-note">Free to download on iPhone</span>
        </div>
        <div className="hero__cta">
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="dl-note">Free to download on iPhone</span>
        </div>
      </section>

      <div className="container main">
        <Reveal className="card intro">
          <div className="intro__glow" aria-hidden="true" />
          <img className="intro__icon" src={img("/images/app-icon.png")} alt="" width={112} height={112} />
          <Split as="h2" className="h2" parts={[["Turn your dreams into reality"]]} />
          <p className="lead">Generate your own {site.brand} AI artwork from a text prompt, a reference photo or your own sketch, in {styles.length} art styles.</p>
          <Btn href={app.url}>Download on the App Store</Btn>
        </Reveal>

        <Reveal className="card split-card">
          <img className="split-card__phone phone" src={img("/images/phone-create.webp")} alt="Create screen: prompt, reference image, art styles, prompt strength" width={300} height={613} loading="lazy" />
          <div className="split-card__text">
            <span className="tag">Create</span>
            <h2 className="h2">Explore a world of art styles</h2>
            <p className="lead">Describe what you imagine, attach a reference image and choose one of {styles.length} styles, from DreamUp and Anime to Clay and Pixel Art.</p>
            <div className="subs">
              {createSubs.map((s) => (
                <div className="sub" key={s.title}>
                  <Icon name={s.icon} />
                  <h3 className="h4">{s.title}</h3>
                  <p className="p">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="card feats">
          <div className="feats__title">
            <span className="tag">Features</span>
            <h2 className="h2 h2--sm">Your idea, your way</h2>
            <p className="p">Start from words, a photo or a drawing. Fine-tune it until it looks like what you had in mind.</p>
          </div>
          <div className="feats__grid">
            {features.map((f) => (
              <div className="feat" key={f.title}>
                <Icon name={f.icon} />
                <h3 className="h4">{f.title}</h3>
                <p className="p">{f.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="pair">
          <Reveal className="card vcard">
            <img className="vcard__phone phone" src={img("/images/phone-sketch.webp")} alt="Sketch screen with a llama drawing" width={270} height={552} loading="lazy" />
            <div className="vcard__fade" aria-hidden="true" />
            <h3 className="h3">Turn sketches into AI art</h3>
            <p className="p">Draw with brush, eraser and fill, pick any color, then let the app finish the picture.</p>
          </Reveal>
          <Reveal className="card vcard" delay={120}>
            <img className="vcard__phone phone" src={img("/images/phone-challenge.webp")} alt="Challenge screen with a 7-day streak and today's keyword" width={270} height={552} loading="lazy" />
            <div className="vcard__fade" aria-hidden="true" />
            <h3 className="h3">Fresh ideas every day</h3>
            <p className="p">Take the daily challenge with a new keyword, like #fantasy, and keep your streak going.</p>
          </Reveal>
        </div>

        <div className="card beam" ref={beamRef}>
          <div className="beam__ray beam__ray--1" aria-hidden="true" />
          <div className="beam__ray beam__ray--2" aria-hidden="true" />
          <div className="beam__ray beam__ray--3" aria-hidden="true" />
          <img className="beam__phone phone" src={img("/images/phone-preview.webp")} alt="Art Preview: a fantasy stag with its prompt and Regenerate button" width={296} height={605} loading="lazy" />
          <Reveal className="beam__cap">
            <h2 className="h4">Edit, enhance and create more</h2>
            <p className="p">Every result keeps its prompt, style and settings, so you can refine it or start a new version.</p>
          </Reveal>
        </div>

        <section className="tour" aria-label="Inside the app">
          <div className="tour__left">
            <div className="tour__head">
              <span className="tag">Inside the app</span>
              <h2 className="h2">Four places to make art</h2>
            </div>
            <div className="tour__tabs" role="tablist">
              {tour.map((t, i) => (
                <button
                  key={t.title}
                  role="tab"
                  aria-selected={tab === i}
                  className={`tab${tab === i ? " is-on" : ""}`}
                  onClick={() => { setTab(i); setPaused(true); }}
                >
                  <span className="tab__title">{t.title}</span>
                  <span className="tab__body">
                    <span className="p">{t.text}</span>
                    <span className="tab__bar"><i key={`${tab}-${paused}`} style={{ ["--dur" as string]: `${TAB_MS}ms`, animationPlayState: paused ? "paused" : "running" }} /></span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="card tour__stage" role="tabpanel" aria-label={tour[tab].title}>
            {tour.map((t, i) => (
              <img key={t.img} className={`phone${tab === i ? " is-on" : ""}`} src={img(t.img)} alt={i === tab ? `${t.title} screen` : ""} width={300} height={613} loading="lazy" />
            ))}
          </div>
        </section>

        <Reveal className="card styles">
          <div className="styles__text">
            <span className="tag">Art styles</span>
            <h2 className="h2">One idea, thirteen looks</h2>
            <p className="lead">Same prompt, different style. Tap a style to see how the llama changes.</p>
            <div className="chips" role="radiogroup" aria-label="Art style">
              {styles.map((s, i) => (
                <button key={s.name} role="radio" aria-checked={style === i} className={`chip${style === i ? " is-on" : ""}`} onClick={() => setStyle(i)}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>
          <div className="styles__preview">
            {styles.map((s, i) => (
              <img key={s.name} className={style === i ? "is-on" : ""} src={img(s.img)} alt={style === i ? `Llama in ${s.name} style` : ""} width={760} height={760} loading="lazy" />
            ))}
            <span className="styles__label" aria-live="polite">{styles[style].name}</span>
          </div>
        </Reveal>

        <section className="gallery">
          <Reveal className="gallery__head">
            <h2 className="h2">What will you imagine?</h2>
            <p className="p">Landscapes, portraits, space, characters. Browse the gallery in the app and filter by Neon, Anime, Challenge and more.</p>
          </Reveal>
          <Reveal className="gallery__row">
            <img src={img(gallery[0])} alt="" style={{ flex: 210 }} loading="lazy" />
            <img src={img(gallery[1])} alt="" style={{ flex: 300 }} loading="lazy" />
            <img src={img(gallery[2])} alt="" style={{ flex: 470 }} loading="lazy" />
            <img src={img(gallery[3])} alt="" style={{ flex: 196 }} loading="lazy" />
          </Reveal>
          <Reveal className="gallery__row gallery__row--2">
            <img src={img(gallery[4])} alt="" style={{ flex: 450 }} loading="lazy" />
            <img src={img(gallery[5])} alt="" style={{ flex: 540 }} loading="lazy" />
            <img src={img(gallery[6])} alt="" style={{ flex: 194 }} loading="lazy" />
          </Reveal>
        </section>

        <section className="block">
          <Reveal as="h2" className="h2">Your art stays on your iPhone</Reveal>
          <div className="cards3">
            {facts.map((f, i) => (
              <Reveal className="card fcard" key={f.title} delay={i * 100}>
                <Icon name={f.icon} />
                <h3 className="h4">{f.title}</h3>
                <p className="p">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="card works">
          <div className="works__title">
            <h2 className="h2 h2--sm">Works with what’s already on your iPhone</h2>
            <p className="p">The app works with the camera, Photos and sharing you already use every day.</p>
          </div>
          <div className="works__grid">
            {worksWith.map((w) => (
              <div className="work" key={w.title}>
                <span className={`work__icon tone-${w.tone}`}><Icon name={w.icon} className="" /></span>
                <h3 className="h4">{w.title}</h3>
                <p className="p">{w.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <section className="block">
          <Reveal as="h2" className="h2">Start in three steps</Reveal>
          <div className="cards3">
            {steps.map((s, i) => (
              <Reveal className="card step" key={s.title} delay={i * 100}>
                <span className={`step__icon${i === 2 ? " step__icon--grad" : ""}`}>
                  {i === 0 ? <img src={img("/images/app-icon.png")} alt="" width={56} height={56} /> : <Icon name={i === 1 ? "pen" : "spark"} />}
                </span>
                <span className="step__body">
                  <span className="step__n">Step {i + 1}</span>
                  <span className="h4">{s.title}</span>
                </span>
                {i === 0 && <Btn href={app.url} size="sm">Download</Btn>}
              </Reveal>
            ))}
          </div>
        </section>

        <QrCta />
      </div>
    </>
  );
}
