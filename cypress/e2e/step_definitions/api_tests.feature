Feature: Consultar informações de produto via API

  Consultar info de produto através do endpoint /api/1/products/{product_id}

  Scenario: Consultar produto via API
    When realizar a chamada no endpoint de product por id 
    Then validar o response da chamada do endpoint de product por id

   Scenario: Alterar imagem de produto
    Given logar via APi capturando o bearer token
    When realizar a chamada post para alterar a imagem de um produto
    Then validar o response da chamada do endpoint de alteração de imagem 
