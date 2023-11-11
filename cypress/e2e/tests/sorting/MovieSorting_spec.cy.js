import { VALID_EMAIL, VALID_PASSWORD } from "../../../params/config"
import { TOP_250_MOVIES_CHART_URL } from "../../../params/constants"
import LoginPage from "../../pages/LoginPage"
import NavigationPage from "../../pages/NavigationPage"
import Top250MoviesChartPage from "../../pages/Top250MoviesChartPage"

describe(`Movie Sorting Actions`, () => {
    beforeEach(() => {
        NavigationPage.goToBaseUrl();
        LoginPage.goToSignInPage();
        LoginPage.selectImdbLoginOption();
        LoginPage.loginWithEmail(VALID_EMAIL, VALID_PASSWORD);
        NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
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