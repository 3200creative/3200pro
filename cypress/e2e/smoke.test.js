describe("Smoke test", () => {
  it("Site loads", () => {
    cy.visit(`/`)
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
