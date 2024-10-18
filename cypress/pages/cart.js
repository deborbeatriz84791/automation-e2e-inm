class CartPage {
    clicarProduto() {
        cy.get('#menuCart').eq(0).click();
    }

    clicarAdicionarCarrinho() {
        cy.get('[name="save_to_cart"]').click();
        cy.get('#menuCart').click();
    }

    ValidarProdutoCarrinho() {
        cy.get('#shoppingCart').should('be.visible');
        cy.get('#checkOutButton').should('be.visible');
    }
}

export default new CartPage();
