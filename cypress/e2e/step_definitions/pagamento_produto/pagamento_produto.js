import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import PayPage from '../../../pages/pagamento';

And("clicar no botão finalizar", () => {
    PayPage.clicarBotaoFinalizarCompra();
});

Then("validar que o produto está sendo exibido na tela de pagamento", () => {
    PayPage.ValidarProdutoPagamento();
});
