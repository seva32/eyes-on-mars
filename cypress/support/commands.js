Cypress.Commands.add('btnClick', (buttonTestId) => {
  cy.get(`[data-testid="${buttonTestId}"]`).click()
})
Cypress.Commands.add('btnGetByText', (buttonText) => {
  cy.contains('button', buttonText).scrollIntoView().should('be.visible')
})
