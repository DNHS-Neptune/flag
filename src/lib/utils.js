import { browser } from '$app/environment';
import { base } from '$app/paths';
import countries from 'i18n-iso-countries';

function randomize(array) {
	return array.sort(() => Math.random() - 0.5);
}

function codeToName(code) {
	return countries.getName(code, 'en');
}

function cacheImage(code) {
	if (browser) {
		const img = new Image();
		img.src = `/${base}/f/png1000px/${code.toLowerCase()}.png`;
	}
}

export { randomize, codeToName, cacheImage };
