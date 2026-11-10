import { gallery, principles, site } from "../content/site";
import { img } from "../utils/img";
import QrCta from "../components/QrCta";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="ahero">
        <div className="ahero__art" aria-hidden="true">
          {[0, 3, 4, 5, 6].map((i) => <img key={i} src={img(gallery[i])} alt="" />)}
        </div>
        <div className="ahero__shade" aria-hidden="true" />
        <div className="ahero__text">
          <span className="tag">About</span>
          <Split as="h1" className="h1" parts={[["Made for people who imagine"]]} />
          <Reveal as="p" className="lead" delay={300}>
            {site.brand} for iPhone puts AI image generation and simple creative tools in your pocket, so an idea can become a picture in a few taps.
          </Reveal>
        </div>
      </section>

      <div className="container">
        <section className="approach">
          <div className="approach__left">
            <span className="tag">Our approach</span>
            <Reveal as="h2" className="h2">Start with your idea, not with settings</Reveal>
          </div>
          <Reveal className="approach__right" delay={100}>
            <p>Most people know what they want to see long before they know how to describe it. So the app accepts whatever you have: a sentence, a photo from your camera roll or a rough sketch.</p>
            <p>The controls stay simple. Pick a style, nudge prompt strength, list what you don’t want, choose a ratio. The daily challenge gives you a reason to come back and try something new.</p>
            <small>The app is operated by {site.operator}, Berlin, and uses the {site.brand} brand under a signed authorization agreement with DeviantArt, Inc.</small>
          </Reveal>
        </section>

        <section className="block principles">
          <Reveal as="h2" className="h2">Three things we hold to</Reveal>
          <div className="cards3">
            {principles.map((p, i) => (
              <Reveal className="card fcard" key={p.title} delay={i * 100}>
                <span className="principle__n">{i + 1}</span>
                <h3 className="h4">{p.title}</h3>
                <p className="p">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="main"><QrCta /></div>
      </div>
    </>
  );
}
