const pageElements = {
  RatedMovies: () => cy.get('button.ipc-rate-button--rated'),
  UnratedMovies: () => cy.get('button.ipc-rate-button--unrated'),
  RateStars: () => cy.get('button.ipc-starbar__rating__button'),
  RateButton: () => cy.get('button.ipc-rating-prompt__rate-button'),
  RemoveRatingButton: () => cy.get('button.ipc-rating-prompt__secondary-button'),
  RatedMovieTitle: () => cy.get('div.ipc-rating-prompt__content-title'),
  RatedAmountText: () => cy.get('span.yhr-rated-amount'),
  VoteCounts: () => cy.get('span.ipc-rating-star--voteCount')
};


export default {
  rateAMovie() {
    pageElements.UnratedMovies()
      .its('length')
      .then((len) => {
        pageElements.UnratedMovies()
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0).click();
      });

    pageElements.RateStars()
      .its('length')
      .then((len) => {
        pageElements.RateStars()
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0).click({ force: true });
      });

    pageElements.RateButton().click();
  },

  unrateAMovie() {
    pageElements.RatedMovies()
      .its('length')
      .then((len) => {
        pageElements.RatedMovies()
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0).click();
      });

    pageElements.RemoveRatingButton().click();
  },

  getRateAmount() {
    return pageElements.RatedAmountText()
      .then(($elem) => {
         return $elem.text(); // return the text of the element
      });
  },

  getVoteAmount() {
    
  }
};