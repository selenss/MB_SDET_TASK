import FiltersPage from "../../pages/FiltersPage"

describe(`Filter Actions`, () => {
    beforeEach(() => {
        cy.beforeHook();
        FiltersPage.goToFilterMenu();
    });

    it('should apply genre filter', () => {
        FiltersPage.selectRandomGenre().then((selectedGenre) => {
            FiltersPage.closeFilterMenu();
            FiltersPage.checkSelectedFilterVisibility(selectedGenre);
        });
    });

});