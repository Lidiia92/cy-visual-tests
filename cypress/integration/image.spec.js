describe('Visual Regression', () => {
	it('My first visual regression test', () => {
		//load website
		cy.visit('http://example.com');

		//compare snapshots
		cy.matchImageSnapshot();
	});
});
