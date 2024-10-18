Feature: Incluir produto no carrrinho

  Eu quero incluir um produto no carrrinho

  Scenario: Incluir produto no carrinho
    Given que eu acessar a página inicial
    And eu buscar um produto 
    When eu entrar na PDP do produto
    And clicar no botão adicionar no carrinho
    Then validar que o produto foi adicionado no carrinho
