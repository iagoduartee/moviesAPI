Essa API foi utilizada usando o padrão REST, que define algumas regras para o desenvolvimento de serviços web.

Tentei utilizar os principios SOLID, para isto escolhi o Nest, pois ele tem injeção de depedência e assim consigo utilizar o principio de LISKOV. Em cada caso de uso/operação eu criei um serviço para seguir o principio de responsabilidade unica e o principio de aberto/fechado.

Como tive menos de uma semana para desenvolver esta API, estudei e aprendi a usar este framework em 4 dias. Falei com amigos e professores e falaram da existência de frameworks como SailsJS e AdonisJS, que entregavam uma API pronta. Preferi criar manualmente com o objetivo de me desafiar e aprender mais da tecnologia, já que javascript eu também poderei utilizar para fazer o frontend com ReactJS ou Angular, já que o NestJS além de ser javascript, ele por padrão é typescript.

Você pode acessar a aplicação por: https://movies-api-web.herokuapp.com
E ver quais requisições podem ser feitas por: https://movies-api-web.herokuapp.com/doc/

A API se encontra aberta para novas funcionalidades, podemos adicionar e/ou trocar quantos banco de dados quiseremos já que utilizei o Repository Pattern.

*O método de atualização de filme pode ser usado para a avaliação do mesmo*
