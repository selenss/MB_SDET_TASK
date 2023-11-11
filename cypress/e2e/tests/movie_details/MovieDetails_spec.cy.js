import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage"
import FiltersPage from "../../pages/FiltersPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"

describe(`Movie Details Checks`, () => {
    beforeEach(() => {
        cy.beforeHook();
        FiltersPage.goToFilterMenu();
    });

    it('should check genre detail of the movie from tooltip', () => {
        FiltersPage.selectRandomGenre().then((selectedGenre) => {
            FiltersPage.closeFilterMenu();
            FiltersPage.checkSelectedFilterVisibility(selectedGenre);

            Top250MoviesChartPage.getRandomMovieTitle().then((selectedMovieTitle) => {
                MovieDetailsPage.clickTooltipOfAMovie(selectedMovieTitle);
                let movieGenres = MovieDetailsPage.getGenresOfAMovie();
                cy.wrap(movieGenres).as('data');
                cy.get('@data').then(() => {
                    expect(movieGenres).to.contain(selectedGenre)
                });
            });
        });
    });

});