describe('dashboard', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard")

  });

  it('should have a header that display site title', () => {
    cy.get("h3")
    .contains("Rancid Tomatillos")
  });

  it('should display the header component', () => {
    cy.get("h3")
    .should("be.visible")
  });

  it('should have a display that contains movie thumbnail components', () => {
    cy.get("section")
      .should("be.visible")
  });

  it('should have a class name of display boxes', () => {
    cy.get("section")
      .should("have.class", "display-boxes")
  });

  it('should display a div with the class movie-container', () => {
    cy.get("div")
      .should("be.visible")
      .should("have.class", "movies-container")
  });

  it('should have an article that displays movie thumbnails', () => {
    cy.get("article")
      .should("have.length", 40)
  });

  it('should access individual movie view when clicked', () => {
    cy.get("article")
      .should("have.length", 40)
      .first().click()
      .get("p")
      .should("have.class", "movie-title")
  });

  it('should return to dashboard when button is clicked', () => {
    cy.get("article")
      .should("have.length", 40)
      .first().click()
      .get("button")
      .click()
      .get("div")
      .should("be.visible")
      .should("have.class", "movies-container")
  });
});

