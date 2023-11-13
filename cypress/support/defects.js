module.exports.addTicket = function (ticketLink) {
  if (ticketLink.length > 0) {
    Cypress.mocha.getRunner().test.title = `${Cypress.mocha.getRunner().test.title} ===> ${ticketLink}`
    Cypress.mocha.getRunner().test.skip();
  }
};