var myBundle = (function (exports) {
	'use strict';

	exports.x = 0;

	function noEffects() {}

	function modifyX() {
		return exports.x++;
	}

	const b = `${globalFunction()}has effects`;

	const c = `${modifyX()}has effects`;

	const e = noEffects`${globalFunction()}has effects`;

	const f = noEffects`${modifyX()}has effects`;

	const g = globalFunction`has effects`;

	const h = globalFunction()`has effects`;

	const i = modifyX`has effects`;

	return exports;

}({}));
