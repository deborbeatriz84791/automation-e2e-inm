import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../../pages/cart';


When("eu entrar na PDP do produto", () => {
    CartPage.clicarProduto();
});

And("clicar no botão adicionar no carrinho", () => {
    CartPage.clicarAdicionarCarrinho();
});

Then("validar que o produto foi adicionado no carrinho", () => {
    CartPage.ValidarProdutoCarrinho();
});
