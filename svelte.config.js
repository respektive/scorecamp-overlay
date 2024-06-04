import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: 'index.html',
            pages: 'docs'
        }),
        paths: {
			base: process.argv.includes('dev') ? '' : '/scorecamp-overlay'
		}
    },
};

export default config;
