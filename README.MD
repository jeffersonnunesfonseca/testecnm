https://blog.rocketseat.com.br/nodejs-express-sequelize/ (usei como exemplo)
https://expressjs.com/pt-br/starter/hello-world.html
https://sequelize.org/master/manual/models-definition.html


Caso:
    Um funcionário emitiu um pedido para o setor de compras solicitando um notebook da marca xxxx , ele deve trocar a marca para uma outra qualquer.

 - Crie um api com laravel que liste os pedidos de um cliente atraves de seu id (no caso pode utlizar o id 1 de forma estática);
 - Utilizando o node, permita alterar o pedido salvando direto no banco de dados sem passar pela api do php

Premissas:
   - Para servidor utilize o express;
   - para acessar o banco de dados utilize o sequelize.



instalando express
npm install express --save

instalando sequelize
npm install --save sequelize

passo a passo estrutura sequelize, dados já estão nos arquivos do projeto
./node_modules/.bin/sequelize init

mkdir database
mkdir app
mv migrations database/
mv seeders database
mv models app/

touch .sequelizerc //vai ser utilizado qndo for criar dinamicamente , exemplo com o babel

yarn add mysql2