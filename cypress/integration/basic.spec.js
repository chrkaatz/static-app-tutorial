describe("Basic", () => {
  it("Home", () => {
    cy.visit("/");
    cy.get('[data-test="header"]').should("be.visible");
    cy.get('[data-test="paragraph"]').should("have.length", 2);
  });
  it("not found", () => {
    cy.visit("/something-weird");
    cy.get('[data-test="header"]').contains("404");
  });
});
