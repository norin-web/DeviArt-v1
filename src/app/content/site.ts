// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Sources: Figma design of the app (V6Uwsu0gGZnrYBNhTnX7u9), the owner's Privacy
// Policy and Terms of Use (October 22, 2026). Nothing here goes beyond them.
// PLACEHOLDER values are marked — refresh `app` from
// https://itunes.apple.com/lookup?id=6820087115 once the app is live.

export const site = {
  brand: "DeviantArt",
  email: "torbenapp@heinemann.click",
  year: new Date().getFullYear(),
  operator: "Torben Heinemann",
  address: "Blissestraße 50, Berlin, Germany",
  // wording follows Terms section 9 "DeviantArt Brand Authorization"
  disclaimer: "AI art generator for iPhone, operated by Torben Heinemann, Berlin. The DeviantArt name and logo are used under a signed Brand and Trademark Authorization Agreement with DeviantArt, Inc.",
};

export const app = {
  id: "6820087115",
  url: "https://apps.apple.com/app/id6820087115",
  // Not in the US App Store yet (lookup returns 0 results, 2026-11-10).
  minIOS: "PLACEHOLDER",
  category: "AI art for iPhone",
  price: "Free to download, some features need a subscription",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

/** The 13 art styles from the Create screen, in the app's order. */
export const styles = [
  "DreamUp", "Anime", "Anthro", "Photographic", "Fantasy", "Vaporwave", "Low-poly",
  "Origami", "Line Art", "Clay", "Cinematic", "3D Model", "Pixel Art",
].map((name) => ({ name, img: `/images/style-${name.toLowerCase().replace(/\s+/g, "-")}.webp` }));

export const createSubs = [
  { icon: "sliders", title: "Prompt strength", text: "Decide how closely the result follows your words." },
  { icon: "minus", title: "Negative prompt", text: "List what you don’t want to see, like dull or poor lighting." },
];

export const features = [
  { icon: "text", title: "Text prompts", text: "Write a scene in your own words, like a serene mountain landscape at sunset, and generate." },
  { icon: "image", title: "Reference photos", text: "Pick an image from Photos or take one with the camera to guide the result." },
  { icon: "ratio", title: "Any aspect ratio", text: "Choose 9:16, 3:4, 1:1, 4:3 or 16:9 for wallpapers, posts and prints." },
  { icon: "refresh", title: "Regenerate and edit", text: "Not quite it? Tweak the prompt, edit the result or regenerate in one tap." },
];

/** Home "Inside the app" tabs — each switches the phone screen. */
export const tour = [
  { title: "Art Library", img: "/images/phone-library.webp", text: "Every piece you generate, with its prompt and settings. Mark favorites, save to Photos or share." },
  { title: "Create", img: "/images/phone-create.webp", text: "Type what you imagine, add a reference, pick a style and tap Generate." },
  { title: "Sketch", img: "/images/phone-sketch.webp", text: "Draw with brush, eraser and fill, then use the sketch as your reference." },
  { title: "Challenge", img: "/images/phone-challenge.webp", text: "A new keyword every day. Create with it and keep your streak going." },
];

export const gallery = Array.from({ length: 7 }, (_, i) => `/images/art-${i + 1}.webp`);

export const facts = [
  { icon: "phone", title: "Stored on your device", text: "Generated images, history, favorites, sketches and challenge streaks live locally. The app has no cloud storage of its own." },
  { icon: "spark", title: "Sent only to generate", text: "Your prompt, chosen reference image and settings go to fal.ai only when you tap Generate." },
  { icon: "ban", title: "No ad networks", text: "No advertising network, no standalone analytics SDK and no separate crash reporting service." },
];

export const worksWith = [
  { icon: "camera", tone: "green", title: "Camera", text: "Snap a reference photo right inside the app." },
  { icon: "image", tone: "magenta", title: "Photos", text: "Pick references from your library and save results back to it." },
  { icon: "share", tone: "violet", title: "Share", text: "Send artwork anywhere through the iOS share sheet." },
  { icon: "apple", tone: "white", title: "Apple subscriptions", text: "Paid features are billed by Apple and managed in your Apple Account." },
];

export const steps = [
  { title: "Get DeviantArt from the App Store" },
  { title: "Type a prompt, add a photo or draw a sketch" },
  { title: "Pick a style and tap Generate" },
];

export const appFeatures = [
  { n: "01", title: "Create", img: "/images/phone-create.webp", text: "Answer “What will you imagine?”, add a reference from Photos or the camera, pick an art style, set prompt strength and an optional negative prompt. Choose 9:16, 3:4, 1:1, 4:3 or 16:9, then tap Generate." },
  { n: "02", title: "Sketch", img: "/images/phone-sketch.webp", text: "Draw on a blank canvas with brush, eraser and background fill. Adjust size, hardness and opacity, pick any color, undo or redo, then tap Done to use the sketch as your reference." },
  { n: "03", title: "Art Preview", img: "/images/phone-preview.webp", text: "See the result with its ratio, style, prompt strength and full prompt. Copy the prompt, favorite the piece, edit, share, delete or tap Regenerate." },
  { n: "04", title: "Challenge", img: "/images/phone-challenge.webp", text: "Daily ideas to spark your creativity. Create a work with the keyword of the day, keep your streak going and scroll the inspiration grid when you need a nudge." },
  { n: "05", title: "Art Library", img: "/images/phone-library.webp", text: "Keep your art and favorites in one place on your iPhone. Save any piece to Photos or share it with the iOS share sheet." },
];

export const aso = Array.from({ length: 6 }, (_, i) => `/images/aso-${i + 1}.webp`);

export const specs: [string, string][] = [
  ["Developer", site.operator],
  ["Device", "iPhone"],
  ["Price", app.price],
  ["Art styles", String(styles.length)],
  ["Aspect ratios", "9:16, 3:4, 1:1, 4:3, 16:9"],
  ["AI processing", "fal.ai, internet connection required"],
  ["Your library", "Stored on your device"],
  ["Language", "English"],
];

export const principles = [
  { title: "Your idea leads", text: "Words, photos and sketches all work as a starting point. The style is a choice, not a template." },
  { title: "Your library is yours", text: "Art, history and favorites are stored on your device. Prompts and references go to the AI service only when you generate." },
  { title: "Plain subscriptions", text: "Prices are shown before you buy, Apple handles payment, and you can cancel any time in your Apple Account." },
];

export const faq = [
  { q: "How do I create my first artwork?", a: "Tap the sparkle button to open Create. Type what you imagine, optionally add a reference image or a sketch, choose an art style and tap Generate. Your result opens in Art Preview and is saved to your library." },
  { q: "Can I start from my own photo or drawing?", a: "Yes. Add a reference from Photos, take a photo with the camera, or draw one in Sketch and tap Done to use it." },
  { q: "Why do I need an internet connection?", a: "Images are generated by fal.ai’s AI service, so creating and regenerating art needs a connection." },
  { q: "Where are my images stored?", a: "On your iPhone only. Save pieces to Photos or share them to keep copies — deleting the app can remove your library." },
  { q: "What is the daily challenge?", a: "Each day brings a keyword, like #fantasy. Create a work with it to keep your streak going." },
  { q: "How do I cancel my subscription?", a: "Open Settings on your iPhone → your name → Subscriptions → DeviantArt → Cancel Subscription. Deleting the app doesn’t cancel an active subscription." },
  { q: "How do I restore a purchase on a new iPhone?", a: "Sign in with the same Apple Account you subscribed with and use the restore option in the app. Your art library is stored locally and doesn’t move with the subscription." },
  { q: "How do I ask for a refund?", a: "Refunds are handled by Apple. Request one at reportaproblem.apple.com." },
  { q: "How do I delete my data?", a: `Delete pieces in Art Library or remove the app. For any other data request, write to ${site.email}.` },
];
