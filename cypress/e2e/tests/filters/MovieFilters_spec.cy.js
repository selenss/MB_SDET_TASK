import FiltersPage from "../../pages/FiltersPage";

describe(`Filter Actions`, () => {
  beforeEach(() => {
    cy.beforeHook();
    FiltersPage.goToFilterMenu();
  });

  it("should apply GENRE filter", () => {
    FiltersPage.selectRandomGenre().then((selectedGenre) => {
      FiltersPage.closeFilterMenu();
      FiltersPage.checkSelectedFilterVisibility(selectedGenre);

      Top250MoviesChartPage.getRandomMovieTitle().then((selectedMovieTitle) => {
        MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
        let movieGenres = MovieDetailsPage.getGenresOfAMovie();
        cy.wrap(movieGenres).as("data");
        cy.get("@data").then(() => {
          expect(movieGenres).to.contain(selectedGenre);
        });
      });
    });
  });
});
