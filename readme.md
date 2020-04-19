# Local Monitoring Tool

This tool will try to load some specific URLs from javscript within the browser.  If successful, it will report either the content of the page that is returned, or simply that the result was successful.  If not successful, an error message will be displayed.

## Installation and deployment

1. Clone the repository to your development system
2. In the project directory, run `npm install`
3. To start a local development server, run `npm run dev` and a server will spin up at http://localhost:1234
4. Make edits to whatever files you need (see "customization" below)
5. To build files for deployment, run `npm run build` and files will be generated in the `build` directory
6. Copy all files from your `build` directory to the destination server

## Customization

Customization is fairly straightforward if you are familiar with Svelte applications, but if not, here are some potentially time-saving instructions:

1. Load the `src/components/App.svelte` file in an editor
2. Note that there are `<Card ...>` tags for each request that is produced in the output
3. Add, remove, or modify the `<Card ...>` tags as you see fit
   1. The `site` parameter should contain the full URL to request
   2. The `showResponse` parameter should be `"yes"` if the output should should the full response from the request
4. Save the file
5. If you're already running the server from `npm run dev` then your browser will automatically reload
6. Repeat the above until the page does what you want
7. Run `npm run build` to produce distribution files for your server

## CORS Note

Because the check is happening inside of your browser, and not on the server, it is subject to CORS request constraints.  Unless the server you're checking has added the appropriate CORS headers, the check will likely return an error.

If you're looking for additional CORS-safe URLs, you might consider CDNs that house javascript, as they are most likely to have the correct headers set.