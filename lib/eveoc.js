
// eveoc.js
'use strict';

module.exports = class EveOverviewComposer {
	constructor(overviewName) {
		this.overviewName = overviewName;
	}

	display() {
		console.log(`overviewName ${overviewName}`);
		console.log(module.filename);
		console.log(module.id);
		console.log(module.exports);
	}
}



