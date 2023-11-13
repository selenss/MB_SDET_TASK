import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage";
import NavigationPage from "../../pages/NavigationPage";
import { TOP_250_MOVIES_CHART_URL } from "../../../params/constants";

describe(`Movie Sorting Actions`, () => {
  before(() => {
    cy.beforeHook();
  });

  beforeEach(() => {
    NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
  });

  it('should sort movies by "IMDb Rating" in ASC mode', () => {
    Top250MoviesChartPage.selectImdbRatingSortOption();
    let imdbRatings = Top250MoviesChartPage.getAllImdbRatings();
    cy.wrap(imdbRatings).as("data");
    cy.get("@data").then(() => {
      for (let i = 0; i < imdbRatings.length - 1; i++) {
        expect(imdbRatings[i] >= imdbRatings[i + 1]).to.eql(true);
      }
    });
  });
});
