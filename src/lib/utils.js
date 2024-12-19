import { browser } from '$app/environment';
import { base } from '$app/paths';

function randomize(array) {
	return array.sort(() => Math.random() - 0.5);
}

function nameToPath(name) {
	return `/${base}/f/${name.toLowerCase().replace(/ /g, '_').replace(/'/g, '')}`;
}

const cached = [];
function cacheImage(name) {
	return new Promise((resolve, reject) => {
		if (browser) {
			const image = new Image();
			image.src = nameToPath(name);
			image.onload = () => resolve(image);
			image.onerror = (error) => reject(error);
			cached.push(image);
		}
	});
}

export { randomize, nameToPath, cacheImage };
