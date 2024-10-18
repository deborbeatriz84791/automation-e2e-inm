Feature: Buscar produto 

  Eu quero buscar um produto

  Scenario: Buscar produto
    Given que eu acessar a página inicial
    When eu buscar um produto 
    Then validar que o produto é exibido na busca
    