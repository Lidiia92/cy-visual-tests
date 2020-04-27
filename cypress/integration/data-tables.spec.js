describe('Visual Regression - Data Table', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#signin_button').click();
		cy.get('#user_login').type('username');
		cy.get('#user_password').type('password');
		cy.get('#user_remember_me').click();
		cy.get('input[name="submit"]').click();
	});

	it('should load account activity', () => {
		cy.get('#account_activity_tab').click();
	});

	it('Data Table Snapshot', () => {
		cy.matchImageSnapshot();
	});
});
