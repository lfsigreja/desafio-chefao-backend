# desafio-chefao-backend

Para rodar aplicação, instale as dependencias com:

* yarn

Vale ressaltar que você terá que ter um banco POSTGRES e configura-lo no arquivo:

* src/config/database.js


Sugestão de configuração: 

  dialect: 'postgres',
  host: 'localhost',
  username: 'SEU_USERNAME',
  password: 'SUA_PASS',
  database: 'Joguete',
  define: {
    timestamps: true,
    underscored: true,
    
Ao configurar a database, você precisa instalar os comandos do sequelize CLI
 
*  yarn sequelize db:create
*  yarn sequelize db:migrate
 

O comando para rodar o backend é:

* yarn dev
