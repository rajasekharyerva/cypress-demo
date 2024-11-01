// Sample test for logging into the application
describe('Login Page', () => {
  beforeEach(() => {
    // Runs before each test in the describe block
    cy.visit('/login'); // Uses the baseUrl configured in cypress.config.js
  });

  it('displays the login form', () => {
    // Verify the login form elements are visible
    cy.get('form').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('contain', 'Login');
  });

  it('logs in with valid credentials', () => {
    // Enter valid username and password
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password123');
    
    // Submit the login form
    cy.get('button[type="submit"]').click();
    
    // Check for successful login by asserting URL or content
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, testuser').should('be.visible');
  });

  it('shows error message with invalid credentials', () => {
    // Enter invalid username and password
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpassword');
    
    // Submit the login form
    cy.get('button[type="submit"]').click();
    
    // Verify error message is displayed
    cy.contains('Invalid username or password').should('be.visible');
  });
});
