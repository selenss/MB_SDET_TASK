import { IMDB_RATING_VALUE, IMDB_RATING_TEXT } from "../../params/constants";

const generateData = require("../../support/data_generators");
const pageElements = {
  RatedMovies: () => cy.get("button.ipc-rate-button--rated"),
  UnratedMovies: () => cy.get("button.ipc-rate-button--unrated"),
  RateStars: () => cy.get("button.ipc-starbar__rating__button"),
  RateButton: () => cy.get("button.ipc-rating-prompt__rate-button"),
  RemoveRatingButton: () => cy.get("button.ipc-rating-prompt__secondary-button"),
  RatedAmountText: () => cy.get("span.yhr-rated-amount"),
  ImdbRatingTexts: () => cy.get("span.ipc-rating-star--imdb"),
  MovieTitlesInCompactView: () => cy.get("div.cli-children h3.ipc-title__text"),
  SortSelectionButton: () => cy.get("select#sort-by-selector"),
  ImdbRatingSortOption: () => cy.get('option[value="USER_RATING"]'),
  SelectedSortOption: () => cy.get("label.ipc-simple-select__selected-option")
};

export default {
  rateAMovie() {
    pageElements
      .UnratedMovies()
      .its("length")
      .then((len) => {
        pageElements
          .UnratedMovies()
          .eq(generateData.getRandomArrayIndex(len))
          .click();
      });

    pageElements
      .RateStars()
      .its("length")
      .then((len) => {
        pageElements
          .RateStars()
          .eq(generateData.getRandomArrayIndex(len))
          .click({ force: true });
      });

    pageElements.RateButton().click();
  },

  unrateAMovie() {
    pageElements
      .RatedMovies()
      .its("length")
      .then((len) => {
        pageElements
          .RatedMovies()
          .eq(generateData.getRandomArrayIndex(len))
          .click();
      });

    pageElements.RemoveRatingButton().click();
  },

  getRateAmount() {
    pageElements.RatedAmountText().should('be.visible');
    return pageElements.RatedAmountText().then(($elem) => {
      return $elem.text(); 
    });
  },

  getAllImdbRatings() {
    let arr = [];
    pageElements
      .ImdbRatingTexts()
      .its("length")
      .then((len) => {
        for (let i = 0; i < len; i++) {
          pageElements
            .ImdbRatingTexts()
            .eq(i)
            .invoke("attr", "aria-label")
            .then((value) => {
              let ratings = value.split("IMDb rating: ");
              arr.push(ratings[1]);
            });
        }
      });
    return arr;
  },

  getRandomMovieTitleFromCompactView() {
    return pageElements
      .MovieTitlesInCompactView()
      .its("length")
      .then((len) => {
        pageElements
          .MovieTitlesInCompactView()
          .eq(generateData.getRandomArrayIndex(len))
          .invoke("text")
          .then((value) => {
            let txt = value.split(". ");
            return txt[1];
          });
      });
  },

  selectImdbRatingSortOption() {
    pageElements.SortSelectionButton().should("exist");
    pageElements
      .SortSelectionButton()
      .select(IMDB_RATING_VALUE, { force: true });
    pageElements
      .SelectedSortOption()
      .invoke("text")
      .then((txt) => {
        expect(txt.trim()).to.eql(IMDB_RATING_TEXT);
      });
  }
};
