const generateData = require("../../support/data_generators");

const pageElements = {
  FilterMenuButton: () => cy.get('button[data-testid="filter-menu-button"]'),
  GenreButtons: () => cy.get('div[data-testid="filter-genre"] button.ipc-chip'),
  FilterMenuCloseButton: () => cy.get('button[title="Close Prompt"]'),
  SelectedFilterItem: () => '',
  Loader: () => cy.get('div[data-testid="chart-layout-sort-change-loader"]'),
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

  closeFilterMenu() {
    pageElements.FilterMenuCloseButton().click();
    pageElements.FilterMenuCloseButton().should("not.be.visible");
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
