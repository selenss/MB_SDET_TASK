import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage";
import FiltersPage from "../../pages/FiltersPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import NavigationPage from "../../pages/NavigationPage";
import { TOP_250_MOVIES_CHART_URL } from "../../../params/constants";

describe(`Movie Details Checks`, () => {
  before(() => {
    cy.beforeHook();
  });

  beforeEach(() => {
    NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
  });

  it("should check genre detail of the movie from tooltip", () => {
    FiltersPage.goToFilterMenu();
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

  it("should check information of the movie from tooltip", () => {
    let movieReleaseDate;
    let movieRuntime;
    Top250MoviesChartPage.getRandomMovieTitleFromCompactView().then((selectedMovieTitle) => {
      MovieDetailsPage.getReleaseDateOfAMovieFromCompactView(selectedMovieTitle).then((releaseDate) => {
        movieReleaseDate = releaseDate;
      });
      MovieDetailsPage.getReleaseDateOfAMovieFromCompactView(selectedMovieTitle).then((runtime) => {
        movieRuntime = runtime;
      });

      MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
      MovieDetailsPage.getTitleOfAMovieFromTooltip(selectedMovieTitle).then((movieTitle) => {
        expect(movieTitle).to.eql(selectedMovieTitle);
      });

      let movieMetaItems = MovieDetailsPage.getMetaItemsOfAMovieFromTooltip();
      cy.wrap(movieMetaItems).as("data");
      cy.get("@data").then(() => {
        expect(movieMetaItems).to.contain(movieReleaseDate);
        expect(movieRuntime).to.contain(movieReleaseDate);
      });

    });
  });
});
