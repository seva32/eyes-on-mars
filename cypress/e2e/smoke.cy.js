describe('CTA Button Navigation', () => {
  it('navigates to sign in view when the CTA Begin Your Journey is clicked', () => {
    cy.visit('/')

    cy.btnClick('begin-journey-button')

    cy.url().should('include', '/auth/signin')

    cy.contains('Enter to your account')
  })
})
