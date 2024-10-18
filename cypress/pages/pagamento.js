class PayPage {
    clicarBotaoFinalizarCompra() {
        cy.get('#checkOutButton').click();
    }

    ValidarProdutoPagamento() {
        cy.get('#registration_btn').should('be.visible');
        cy.get('#userCart').should('be.visible');
        cy.get('[translate="ORDER_PAYMENT"]').should('contains', 'PEDIDO DE PAGAMENTO');
    }
}

export default new PayPage();
