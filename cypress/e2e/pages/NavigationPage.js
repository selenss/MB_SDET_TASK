import {SING_IN_OPT_IMDB, TOP_250_MOVIES_CHART_URL} from "../../params/constants"

export default {
    goToBaseUrl() {
      cy.visit('')
    },

    goToGivenUrl(url) {
        cy.visit(url);
    }
  };