import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When("realizar a chamada no endpoint de product por id", () => {
    cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/27'
    }).as('response_of_search')
});

Then("validar o response da chamada do endpoint de product por id", () => {
    cy.get('@response_of_search')
      .then(res => {
        expect(res.status).to.equal(200)
    })
});
