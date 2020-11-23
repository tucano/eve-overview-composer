const assert = require('assert');
const EveOverviewComposer = require('../lib/eveoc.js');

describe('EveOverviewComposer', () => {
 	it('should create instance and have an overviewName', () => {
 		let eveoc = new EveOverviewComposer("testOverview");
        assert.equal(eveoc.overviewName, "testOverview");
    });
});