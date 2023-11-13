import FiltersPage from "../../pages/FiltersPage";
import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import NavigationPage from "../../pages/NavigationPage";
import { DRAMA_GENRE, THRILLER_GENRE, TOP_250_MOVIES_CHART_URL } from "../../../params/constants";
import defects from '../../../support/defects';

describe(`Filter Actions`, () => {
  before(() =>{
    cy.beforeHook();
  });

  beforeEach(() => {
    NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
    FiltersPage.goToFilterMenu();
  });

  it("should apply GENRE filter with random selection", () => {
    defects.addTicket('SQM-1');
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

  it("should apply DRAMA GENRE filter", () => {
    FiltersPage.selectAGenre(DRAMA_GENRE).then((genre) => {
      FiltersPage.closeFilterMenu();
      FiltersPage.checkSelectedFilterVisibility(genre);

      Top250MoviesChartPage.getRandomMovieTitleFromCompactView().then((selectedMovieTitle) => {
        MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
        let movieGenres = MovieDetailsPage.getGenresOfAMovieFromTooltip();
        cy.wrap(movieGenres).as("data");
        cy.get("@data").then(() => {
          expect(movieGenres).to.contain(DRAMA_GENRE);
        });
      });
    });
  });

  it("should apply THRILLER GENRE filter", () => {
    FiltersPage.selectAGenre(THRILLER_GENRE).then((genre) => {
      FiltersPage.closeFilterMenu();
      FiltersPage.checkSelectedFilterVisibility(genre);

      Top250MoviesChartPage.getRandomMovieTitleFromCompactView().then((selectedMovieTitle) => {
        MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
        let movieGenres = MovieDetailsPage.getGenresOfAMovieFromTooltip();
        cy.wrap(movieGenres).as("data");
        cy.get("@data").then(() => {
          expect(movieGenres).to.contain(THRILLER_GENRE);
        });
      });
    });
  });
});
