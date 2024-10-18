Feature: Validar produto no carrrinho tela de pagamento

  Eu quero validar um produto na tela de pagamento

  Scenario: Validar produto no carrinho tela de pagamento
    Given que eu acessar a página inicial
    And eu buscar um produto 
    When eu entrar na PDP do produto
    And clicar no botão adicionar no carrinho
    And clicar no botão finalizar
    Then validar que o produto está sendo exibido na tela de pagamento
