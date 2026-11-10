import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="shero">
        <div className="container">
          <span className="tag">Support</span>
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
        </div>
      </section>
      <div className="container faqwrap">
        <div className="faqwrap__side">
          <p className="lead">Answers to common questions about creating, your library and subscriptions.</p>
          <Reveal className="card mailcard">
            <span className="note">Still stuck? Write to us</span>
            <a className="mailcard__mail" href={`mailto:${site.email}`}>{site.email}</a>
            <Btn href={`mailto:${site.email}`} variant="ghost" size="sm">Send an email</Btn>
          </Reveal>
        </div>
        <div className="faq">
          {faq.map((f, i) => (
            <div className={`faq__item${open === i ? " is-open" : ""}`} key={f.q}>
              <button className="faq__q" aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <ChevronDown aria-hidden="true" strokeWidth={2} />
              </button>
              <div className="faq__a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                <div className="faq__inner"><p>{f.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
