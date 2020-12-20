describe("Basic", () => {
  it("Home", () => {
    cy.visit("/");
    cy.get('[data-test="header"]').should("be.visible");
    cy.get('[data-test="paragraph"]').should("have.length", 2);
  });
  it("Navigation", () => {
    cy.visit("/");
    cy.get('[data-test="nav-news"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/news");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("News");
    cy.get('[data-test="nav-more"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/more");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("More");
  });
  it("About Page", () => {
    cy.visit("/");
    cy.get('[data-test="nav-more"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/more");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("More");
    cy.get('[data-test="more-nav-about"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/about");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("About");
  });
  it("Legal Page", () => {
    cy.visit("/");
    cy.get('[data-test="nav-more"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/more");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("More");
    cy.get('[data-test="more-nav-legal"]').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/legal");
    });
    cy.get('[data-test="header"]').should("be.visible").contains("Legal");
  });
  it("Not Found Page", () => {
    cy.visit("/weird", { failOnStatusCode: false });
    cy.get('[data-test="header"]').contains("404");
  });
});
