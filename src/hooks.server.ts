import type { Handle } from '@sveltejs/kit';
import info from '$lib';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.headers.get('user-agent')?.includes('curl')) {
		return new Response(`\
\
\x1b[1m"${info.quote}"\x1b[0m
${info.description}

\x1b[2;3m${info.title} - ${event.request.headers.get('user-agent')} version ;)\x1b[0m\n\
\
`);
	}

	const response = await resolve(event);
	const { pathname } = event.url;

	if (/\.(png|jpe?g|gif|webp|avif|svg|ico|mp3|ogg|wav|woff2?|ttf|otf)$/i.test(pathname)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	return response;
};