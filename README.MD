https://blog.rocketseat.com.br/nodejs-express-sequelize/ (usei como exemplo)
https://expressjs.com/pt-br/starter/hello-world.html
https://sequelize.org/master/manual/models-definition.html


consulta clientes na tb_cliente (sequelize)

jogar na rota /clients (express /koa)

exibir no front (react)

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