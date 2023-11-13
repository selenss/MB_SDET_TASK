const generateData = require("../../support/data_generators");

const pageElements = {
  FilterMenuButton: () => cy.get('button[data-testid="filter-menu-button"]'),
  GenreButtons: () => cy.get('div[data-testid="filter-genre"] button.ipc-chip'),
  FilterMenuCloseButton: () => cy.get('button[aria-label="Close Prompt"]'),
  SelectedFilterItem: () => '',
  Loader: () => cy.get('div[data-testid="chart-layout-sort-change-loader"]'),
  SpecificGenreButton: () => ''
};

export default {
  goToFilterMenu() {
    pageElements.FilterMenuButton().click();
  },

  selectRandomGenre() {
    return pageElements
      .GenreButtons()
      .its("length")
      .then((len) => {
        pageElements
          .GenreButtons()
          .eq(generateData.getRandomArrayIndex(len))
          .click()
          .invoke("text")
          .then((value) => {
            let txt = value.split(" (");
            return txt[0];
          });
      });
  },

  selectAGenre(genre) {
    pageElements.SpecificGenreButton = cy.get(`button[data-testid="filter-genre-chip-${genre}"]`);
    return pageElements
          .SpecificGenreButton
          .click()
          .invoke("text")
          .then((value) => {
            let txt = value.split(" (");
            return txt[0];
          });
  },

  closeFilterMenu() {
    pageElements.FilterMenuCloseButton().should("be.enabled");
    pageElements.FilterMenuCloseButton().click();
  },

  checkSelectedFilterVisibility(selectedFilterTxt) {
    pageElements.SelectedFilterItem = cy.get(
      `button[data-testid="filter-chip-genre-${selectedFilterTxt}"]`
    );
    pageElements.SelectedFilterItem.should("exist");
    pageElements.SelectedFilterItem.should("be.visible");
    pageElements.Loader().should("not.exist");
  },
};
