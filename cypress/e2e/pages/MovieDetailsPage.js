import { MOVIE_TOOL_TIP_MSG } from "../../params/constants";

const pageElements = {
  Tooltip: () => "",
  MovieGenresTexts: () => cy.get('ul[data-testid="btp_gl"] li'),
  MovieMetaItemsTexts: () => cy.get('ul[data-testid="btp_ml"] li'),
  MovieMetaItemReleaseYear: () => '',
  MovieMetaItemRuntime: () => '',
  MovieTitleInTooltip: () => cy.get('h3.prompt-title-text')
};

export default {
  clickTooltipOfAMovie(movieTitle) {
    pageElements.FilterMenuButton = cy.get(
      `button[title="${MOVIE_TOOL_TIP_MSG} ${movieTitle}"]`
    );
    pageElements.FilterMenuButton.click();
  },

  getGenresOfAMovieFromTooltip() {
    let arr = [];
    pageElements
      .MovieGenresTexts()
      .its("length")
      .then((len) => {
        for (let i = 0;i < len;i++) {
          pageElements
            .MovieGenresTexts()
            .eq(i)
            .invoke("text")
            .then((value) => {
              arr.push(value);
            });
        }
      });
    return arr;
  },

  getMetaItemsOfAMovieFromTooltip() {
    let arr = [];
    pageElements
      .MovieMetaItemsTexts()
      .its("length")
      .then((len) => {
        for (let i = 0;i < len;i++) {
          pageElements
            .MovieMetaItemsTexts()
            .eq(i)
            .invoke("text")
            .then((value) => {
              arr.push(value);
            });
        }
      });
    return arr;
  },

  getTitleOfAMovieFromTooltip() {
    return pageElements.MovieTitleInTooltip()
    .invoke('text')
    .then((txt) => {
      return txt.trim();
    });
  },

  getReleaseDateOfAMovieFromCompactView(movieTitle) {
    pageElements.MovieMetaItemReleaseYear = cy.xpath(`//h3[contains(text(),"${movieTitle}")]//..//..//..//span[contains(@class,"cli-title-metadata-item")]`).eq(0);
    return pageElements.MovieMetaItemReleaseYear
    .invoke('text')
    .then((txt) => {
      return txt.trim();
    });
  },

  getRuntimeOfAMovieFromCompactView(movieTitle) {
    pageElements.MovieMetaItemRuntime = cy.xpath(`//h3[contains(text(),"${movieTitle}")]//..//..//..//span[contains(@class,"cli-title-metadata-item")]`).eq(1);
    return pageElements.MovieMetaItemRuntime
    .invoke('text')
    .then((txt) => {
      return txt.trim();
    });
  }
};
