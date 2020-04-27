describe('Visual Regression - Login Page', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#signin_button').click();
		cy.get('#user_login').type('test');
		cy.get('#user_password').type('test');
		cy.get('#user_remember_me').click();
	});

	it('Desktop Layout', () => {
		cy.setResolution([1280, 720]);
		cy.matchImageSnapshot();
	});

	it('Tablet Layout', () => {
		cy.setResolution('ipad-2');
		cy.matchImageSnapshot();
	});

	it('Mobile Layout', () => {
		cy.setResolution('iphone-6');
		cy.matchImageSnapshot();
	});
});
