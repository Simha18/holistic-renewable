# Holistic Renewable Technologies

Five-page responsive React website, built with Vite. Run `npm install` then `npm run dev`. Use `npm run build` for production output in `dist`.

## Configuration before public launch

- Change `config.email` in `src/data/siteContent.js` to change the enquiry recipient and all email links.
- Enquiries use FormSubmit. The recipient must activate the service via its confirmation email after the first submission. Delivery has not been verified. Do not use the form for sensitive information. Review the provider's terms and privacy practices before launch.
- Contact details and the Kadiri map coordinates are configured in `src/data/siteContent.js`. The contact page and footer use these shared values. The enquiry recipient is `holisticrenewabletech@gmail.com`; this recipient must activate FormSubmit before delivery can be confirmed.
- Active redesigned branding is in `public/hrt-logo-v7.png` and `public/hrt-favicon-v7.png`. The original supplied JPEG files and previous versions are preserved. See `BRANDING.md` for design notes.
- Projects are clearly marked illustrative concepts. Replace with verified project records, photographs and permission-cleared details.
- Current stock photography is remotely loaded from Unsplash and is illustrative. Fonts load from Google Fonts. Self-host licensed assets if required.
- The desired domain is `holisticrenewabletechnologies.com`; DNS and domain registration are not configured by this source.
- Production hosting must serve `index.html` for unknown paths so that direct visits to `/about`, `/technology`, `/projects` and `/contact` load the React application. A Cloudflare Pages `_redirects` file is included.

## Content

No client testimonials, certifications, plant capacities or project outcomes were supplied or fabricated. Technology content is general introductory copy and should receive the client's technical review before public launch.

## Editing the website

- Page text and layout: edit the matching file in `src/pages/` (Home, About, Technology, Projects or Contact).
- Image URLs, service names/descriptions, email, address and navigation: edit `src/data/siteContent.js`. These values are shared where used across pages.
- Header and footer: edit `src/components/Header.jsx` and `src/components/Footer.jsx`.
- Enquiry fields and submission handling: edit `src/components/ContactForm.jsx`.
- Shared page banners, buttons, FAQs and closing section: edit the matching component in `src/components/`.
- Colours, fonts, spacing and responsive layouts: edit `src/style.css`. The client-requested larger typography, stronger contrast and responsive readability adjustments are in `src/readability.css`, loaded after the base styles.
- App layout and URL-to-page mapping: `src/App.jsx`. The entry file `src/main.jsx` only mounts the app and loads styles.
- Active logo and favicon: `public/hrt-logo-v7.png` and `public/hrt-favicon-v7.png`.

For a local image, place it in `public/images/` and use a path such as `/images/home-hero.jpg` in the photos object. No build or deployment is needed while editing with `npm run dev`.
