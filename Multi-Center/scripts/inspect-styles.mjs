import * as mod from '../src/Pages/Login/styles.js';
console.log('Module keys:', Object.keys(mod));
console.log('Has default:', 'default' in mod);
if ('default' in mod) {
	const d = mod.default;
	console.log('Default type:', typeof d);
	if (d && typeof d === 'object') {
		console.log('Default keys:', Object.keys(d));
	}
}
