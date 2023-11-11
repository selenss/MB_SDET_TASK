import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage"

describe(`Movie Sorting Actions`, () => {
    beforeEach(() => {
        cy.beforeHook();
    });

    it('should sort movies by "IMDb Rating" in ASC mode', () => {
        Top250MoviesChartPage.selectImdbRatingSortOption();
        let imdbRatings = Top250MoviesChartPage.getAllImdbRatings();
        cy.wrap(imdbRatings).as('data');
        cy.get('@data').then(() => {
            for (let i = 0; i < imdbRatings.length - 1; i++) {
                expect(imdbRatings[i] >= imdbRatings[i + 1]).to.eql(true);
            }
        });
    });
});