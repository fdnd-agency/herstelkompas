export async function GET() {
	const baseUrl = 'https://seogeoties.netlify.app';

	const pages = [
		{ path: '/', priority: '1.0' },
		{ path: '/bingokaart', priority: '0.9' },
		{ path: '/vragenlijst', priority: '0.9' },
		{ path: '/scans', priority: '0.9' },
		{ path: '/behandelingen', priority: '0.8' }
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `
	<url>
		<loc>${baseUrl}${page.path}</loc>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}