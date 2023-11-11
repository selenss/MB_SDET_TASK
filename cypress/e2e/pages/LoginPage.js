import {SING_IN_OPT_IMDB} from "../../params/constants"

const pageElements = {
    SignInButton: () => cy.get('a.imdb-header__signin-text'),
    SignInImdbButton: () => cy.xpath(`//span[text()="${SING_IN_OPT_IMDB}"]`),
    EmailInput: () => cy.get('input#ap_email'),
    PasswordInput: () => cy.get('input#ap_password'),
    SigninButton: () => cy.get('input#signInSubmit'),
    UserIcon: () => cy.get('span.navbar__user-name')
  };
  
  export default {
    goToSignInPage() {
      pageElements.SignInButton().click();
      pageElements.SignInImdbButton().should('exist');
    },
  
    selectImdbLoginOption() {
        pageElements.SignInImdbButton().should('be.visible');
        pageElements.SignInImdbButton().click();
        pageElements.SigninButton().should('exist');
    },
  
    loginWithEmail(email,password) {
        pageElements.EmailInput().clear();
        pageElements.EmailInput().type(email);
        pageElements.PasswordInput().clear();
        pageElements.PasswordInput().type(password);
        pageElements.SigninButton().click();
        pageElements.SignInButton().should('not.exist');
        pageElements.UserIcon().should('exist');
        pageElements.UserIcon().should('be.visible');
    }
  };