
class BuscaPage {
    clicarBotaoLupa() {
        cy.get('#menuSearch').click();
    }
     
    RealizarBusca(produto) {
        cy.get('input[id="autoComplete"]').type(produto);
        cy.get('#menuSearch').click();
    }

    ValidarProdutoBusca() {
        cy.get('.imgProduct').should('be.visible');
        cy.get('.titleItemsCount ').should('be.visible');  
    }
}

export default new BuscaPage();
