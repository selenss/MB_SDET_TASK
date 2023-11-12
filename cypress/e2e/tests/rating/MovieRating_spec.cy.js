import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage";

describe(`Movie Rating Actions`, () => {
  beforeEach(() => {
    cy.beforeHook();
  });

  it.only("should rate a movie", () => {
    Top250MoviesChartPage.getRateAmount().then((beforeRate) => {
      Top250MoviesChartPage.rateAMovie();
      Top250MoviesChartPage.getRateAmount().then((afterRate) => {
        expect(parseInt(afterRate)).to.eql(parseInt(beforeRate) + 1);
      });
    });

    Top250MoviesChartPage.getRateAmount().then((beforeUnrate) => {
      Top250MoviesChartPage.unrateAMovie();
      Top250MoviesChartPage.getRateAmount().then((afterUnrate) => {
        expect(parseInt(afterUnrate)).to.eql(parseInt(beforeUnrate) - 1);
      });
    });
  });

  it("should unrate a movie", () => {
    Top250MoviesChartPage.rateAMovie();
    Top250MoviesChartPage.getRateAmount().then((beforeUnrate) => {
      Top250MoviesChartPage.unrateAMovie();
      Top250MoviesChartPage.getRateAmount().then((afterUnrate) => {
        expect(parseInt(afterUnrate)).to.eql(parseInt(beforeUnrate) - 1);
      });
    });
  });
});
