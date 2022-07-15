describe('individual movie view', () => {

  beforeEach(() => {
    //How to get straight to movie view? Tried entering /:id
    cy.visit("http://localhost:3000")
    cy.get("article")
    .should("have.length", 40)
    .first().click()
  });

  it('should have a header that display site title', () => {
    cy.get("h3")
    .contains("Rancid Tomatillos")
  });

  it('should display the header component', () => {
    cy.get("h3")
    .should("be.visible")
  });

  it('should display the movie component', () => {
    cy.get("section")
    .should("have.class", "individual-movie-view")
    .should("be.visible")
  });

  it('should display a movie title', () => {
    cy.get("section")
    .contains("Money Plane")
  });

  it('should display a movie overview', () => {
    cy.get("section")
    .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  });

  it('should display a movie runtime', () => {
    cy.get("section")
    .contains("82")
  });

  it('should display a movie release date', () => {
    cy.get("section")
    .contains("2020-09-29")
  });

  it('should return to dashboard when button is clicked', () => {
    cy.get("button")
      .click()
      .get("div")
      .should("be.visible")
      .should("have.class", "movies-container")
  });


});

