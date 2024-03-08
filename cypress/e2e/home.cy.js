describe('Recipe App', () => {
  it('home', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='mainHeader']").contains("Recipe")
    cy.get("[data-test='loginBtn']").contains("Login").should("be.visible").click({ force: true });
    cy.url().should('include', '/login')
    
  })
  // it('login', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get("[data-test='loginBtn']").contains("Login").should("be.visible").click({ force: true });
  // })
})