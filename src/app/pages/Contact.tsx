import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__grid">
        <div className="contact__left">
          <span className="tag">Contact and feedback</span>
          <Split as="h1" className="h1" parts={[["Say hello"]]} />
          <p className="lead">Questions, ideas for new styles or a bug to report. Write to us and include your iPhone model and iOS version if something isn’t working.</p>
          <div className="contact__mail">
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <span className="contact__addr contact__addr--desk">{site.operator}, {site.address}</span>
        </div>
        <Reveal className="card contact__form">
          <MailForm
            subject={`${site.brand} app`}
            submit="Send message"
            fields={[
              { name: "name", label: "Your name", auto: "name", placeholder: "Alex" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email", placeholder: "you@example.com" },
              { name: "topic", label: "Topic", chips: ["Question", "Feedback", "Bug", "Subscription"] },
              { name: "message", label: "Message", textarea: true, required: true, placeholder: "Tell us what happened or what you’d like to see" },
            ]}
          />
        </Reveal>
        <span className="contact__addr contact__addr--mob">{site.operator}, {site.address}</span>
      </div>
    </section>
  );
}
