import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
	const now = new Date();
	const posts = await getCollection('blog');

	return posts
		.filter((post) => !post.data.draft && post.data.pubDate <= now)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
