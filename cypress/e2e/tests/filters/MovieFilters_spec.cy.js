import { VALID_EMAIL, VALID_PASSWORD } from "../../../params/config"
import { TOP_250_MOVIES_CHART_URL } from "../../../params/constants"
import LoginPage from "../../pages/LoginPage"
import NavigationPage from "../../pages/NavigationPage"
import FiltersPage from "../../pages/FiltersPage"

describe(`FilterActions`, () => {
    beforeEach(() => {
        NavigationPage.goToBaseUrl();
        LoginPage.goToSignInPage();
        LoginPage.selectImdbLoginOption();
        LoginPage.loginWithEmail(VALID_EMAIL, VALID_PASSWORD);
        NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
        FiltersPage.goToFilterMenu();
    });

    it('should apply genre filter', () => {
        FiltersPage.selectRandomGenre().then((selectedGenre) => {
            FiltersPage.closeFilterMenu();
            FiltersPage.checkSelectedFilterVisibility(selectedGenre);
        });
    });

});