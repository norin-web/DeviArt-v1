import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

/** Desktop: QR code to the store. Mobile (already on a phone): icon + button. */
export default function QrCta() {
  return (
    <Reveal className="card qr">
      <img className="qr__code" src={img("/images/qr-app-store.svg")} alt={`QR code: ${site.brand} on the App Store`} width={220} height={220} loading="lazy" />
      <img className="qr__icon" src={img("/images/app-icon.png")} alt="" width={72} height={72} loading="lazy" />
      <div className="qr__text">
        <h2 className="h2 h2--sm">
          <span className="only-wide">Scan to get {site.brand} on your iPhone</span>
          <span className="only-narrow">Get {site.brand} on your iPhone</span>
        </h2>
        <p className="lead">Point your iPhone camera at the code to open the App Store page.</p>
        <Btn href={app.url}>Download on the App Store</Btn>
      </div>
    </Reveal>
  );
}
