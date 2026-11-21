# Orange AI translations

The homepage uses three JSON dictionaries:

- `en.json` — English (default route: `/`)
- `es.json` — Spanish (route: `/es`)
- `fr.json` — French (route: `/fr`)

## Updating copy

1. Open the matching file in this directory.
2. Edit the value, keeping the existing key names and JSON structure.
3. Apply the same structural change to all three language files.
4. Keep arrays in the same order across languages. For example, service cards and FAQ items are rendered by matching array position.
5. Keep service-card `number`, `icon`, project `image`, `video`, and CSS `className` values aligned across languages; translate only the visible copy fields.

The homepage imports these dictionaries in `app/page.js` and passes the relevant section object to each component as `t`. This keeps copy separate from presentation and makes future language additions straightforward.

## Adding another language

1. Create a new JSON file using the same key structure.
2. Import it in `app/page.js` and add it to `dictionaries`.
3. Add the locale to `app/[locale]/page.js` in `supportedLocales` and provide localized metadata.
4. Add the language name and locale code to the header language selector in `components/layout/SiteHeader.jsx`.

The current language routes are statically generated for Spanish and French. English remains the default root route.
