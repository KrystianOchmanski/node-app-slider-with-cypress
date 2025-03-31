describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});

describe("Swiper Gallery Navigation Test", function () {
  it("Allows navigation using next and previous buttons", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("exist");
    cy.get(".swiper-button-prev").click();
    cy.get(".swiper-slide-active").should("exist");
  });
});

describe("Swiper Slide Description Test", function () {
  it("Ensures each slide displays the correct title and description", function () {
    cy.visit("http://localhost:3000");
    const slides = [
      { title: "Rome", description: "Italy" },
      { title: "London", description: "United Kingdom" },
      { title: "Paris", description: "France" },
    ];

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
      }
      cy.get(".swiper-slide-active").should("contain", slide.title);
      cy.get(".swiper-slide-active").should("contain", slide.description);
    });
  });
});

describe("Swiper Gallery Responsive Test", function () {
  const viewports = [
    [1920, 1080],
    [1024, 768],
    [375, 667],
  ];

  viewports.forEach((size) => {
    it(`Adjusts correctly to viewport size ${size[0]}x${size[1]}`, function () {
      cy.viewport(size[0], size[1]);
      cy.visit("http://localhost:3000");
      cy.get(".swiper").should("be.visible");
      cy.get(".swiper-button-next").should("be.visible");
      cy.get(".swiper-button-prev").should("be.visible");
    });
  });
});

describe("Swiper Gallery Display Test", function () {
  it("Checks if gallery is correctly displayed", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper").should("be.visible");
    cy.get(".swiper-slide").should("have.length", 3);
    cy.get(".swiper-button-next").should("exist");
    cy.get(".swiper-button-prev").should("exist");
  });
});
