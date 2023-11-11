export default {
    goToBaseUrl() {
      cy.visit('')
    },

    goToGivenUrl(url) {
        cy.visit(url);
    }
  };