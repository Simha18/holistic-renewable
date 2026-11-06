# Holistic Renewable Technologies

Five-page responsive React website, built with Vite. Run `npm install` then `npm run dev`. Use `npm run build` for production output in `dist`.

## Configuration before public launch

- Change `config.email` in `src/main.jsx` to change the enquiry recipient and all email links.
- Enquiries use FormSubmit. The recipient must activate the service via its confirmation email after the first submission. Delivery has not been verified. Do not use the form for sensitive information. Review the provider's terms and privacy practices before launch.
- Add the client's actual address and map location. The present contact page intentionally shows a location placeholder; no address was supplied. Replace that placeholder with a map iframe once confirmed.
- Replace the temporary leaf-and-sun brand mark and `public/favicon.svg` with the supplied brand assets when available.
- Projects are clearly marked illustrative concepts. Replace with verified project records, photographs and permission-cleared details.
- Current stock photography is remotely loaded from Unsplash and is illustrative. Fonts load from Google Fonts. Self-host licensed assets if required.
- The desired domain is `holisticrenewabletechnologies.com`; DNS and domain registration are not configured by this source.
- Production hosting must serve `index.html` for unknown paths so that direct visits to `/about`, `/technology`, `/projects` and `/contact` load the React application. A Cloudflare Pages `_redirects` file is included.

## Content

No client testimonials, certifications, plant capacities or project outcomes were supplied or fabricated. Technology content is general introductory copy and should receive the client's technical review before public launch.
