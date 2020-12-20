describe("Basic", () => {
  it("News Overview", () => {
    cy.visit("/news");
    cy.get('[data-test="header"]').should("be.visible").contains("News");
    cy.get('[data-test="news-link"]').should("have.length", 2);
  });
  it("News #1", () => {
    cy.visit("/news");
    cy.get('[data-test="news-link"]').first().click();
    cy.get('[data-test="header"]').should("be.visible");
    cy.get('[data-test="news-body"]').should("be.visible");
  });
  it("News #2", () => {
    cy.visit("/");
    cy.get('[data-test="nav-news"]').click();
    cy.get('[data-test="header"]').should("be.visible").contains("News");
    cy.get('[data-test="news-link"]').first().next().click();
    cy.get('[data-test="header"]').should("be.visible");
    cy.get('[data-test="news-body"]').should("be.visible");
  });
});
