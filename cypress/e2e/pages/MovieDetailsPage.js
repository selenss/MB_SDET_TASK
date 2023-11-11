import { MOVIE_TOOL_TIP_MSG } from "../../params/constants"

const pageElements = {
    Tooltip: () => '',
    MovieGenresTexts: () => cy.get('ul[data-testid="btp_gl"] li')
};

export default {
    clickTooltipOfAMovie(title) {
        pageElements.FilterMenuButton = cy.get(`button[title="${MOVIE_TOOL_TIP_MSG} ${title}"]`);
        pageElements.FilterMenuButton.click();
    },

    getGenresOfAMovie() {
        let arr = [];
        pageElements.MovieGenresTexts()
            .its('length')
            .then((len) => {
                for (let i = 0;i < len;i++) {
                    pageElements.MovieGenresTexts()
                        .eq(i)
                        .invoke('text')
                        .then((value) => {
                            arr.push(value);
                        })
                }
            });
        return arr;
    }
};