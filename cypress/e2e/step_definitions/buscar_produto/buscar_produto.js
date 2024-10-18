import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscaPage from '../../../pages/busca';

Given("que eu acessar a página inicial", () => {
    cy.visit('');
});

When("eu buscar um produto", () => {
    BuscaPage.clicarBotaoLupa();
    BuscaPage.RealizarBusca('mouse');
});

Then("validar que o produto é exibido na busca", () => {
    BuscaPage.ValidarProdutoBusca();
});
