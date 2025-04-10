Cypress.Commands.add('btnClick', (buttonTestId) => {
  cy.get(`[data-testid="${buttonTestId}"]`).click()
})
