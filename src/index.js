/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		if(request.url == "https://www.cloudfalreworkers.com/test"){
			return new Response ('Hello Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		else {
			return new Response('Error Worker! Wrong URL', {
				headers: {
					'content-type': 'text/plain'
				},
			});	
		}
		
	},
};
