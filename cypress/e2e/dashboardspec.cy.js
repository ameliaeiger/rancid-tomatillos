describe('dashboard', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard")

  });

  it('should have a header that display site title', () => {
    cy.get("h3")
    .contains("Movie Nova")
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
      .get("div")
      .should("have.class", "page-wrapper")
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

  it('should display the movie component', () => {
    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("section")
    .should("have.class", "individual-movie-view")
    .should("be.visible")
  });

  it('should display a movie title', () => {
    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("section")
    .contains("Money Plane")
  });

  it('should display a movie overview', () => {
    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("section")
    .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  });

  it('should display a movie runtime', () => {
    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("section")
    .contains("82")
  });

  it('should display a movie release date', () => {

    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("section")
    .contains("2020-09-29")
  });

  it('should return to dashboard when button is clicked', () => {

    cy.get("article")
    .should("have.length", 40)
    .first().click()

    cy.get("button")
      .click()
      .get("div")
      .should("be.visible")
      .should("have.class", "movies-container")
  });


  it('should display the Error component', () => {
    cy.visit('http://localhost:3000/655342')
    cy.get("h2")
    .should("be.visible")
    .contains("404 Error: Page Not Found")
    .get("button")
    .click()
    .get("section")
    .should("have.class", "display-boxes")
  });

});

