import FiltersPage from "../../pages/FiltersPage";
import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage"

describe(`Filter Actions`, () => {
  beforeEach(() => {
    cy.beforeHook();
    FiltersPage.goToFilterMenu();
  });

  it("should apply GENRE filter", () => {
    FiltersPage.selectRandomGenre().then((selectedGenre) => {
      FiltersPage.closeFilterMenu();
      FiltersPage.checkSelectedFilterVisibility(selectedGenre);

      Top250MoviesChartPage.getRandomMovieTitleFromCompactView().then((selectedMovieTitle) => {
        MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
        let movieGenres = MovieDetailsPage.getGenresOfAMovieFromTooltip();
        cy.wrap(movieGenres).as("data");
        cy.get("@data").then(() => {
          expect(movieGenres).to.contain(selectedGenre);
        });
      });
    });
  });
});
