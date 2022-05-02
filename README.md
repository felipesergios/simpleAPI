# Backend - Nodejs - Express

### Motivação 
Construir uma API de gerencia de clientes utilizando ExpressJS 
com Autenticação JWT .
Techs utilizadas no projeto 
- NodeJS
- Express
- KnexJs
- MariaDb
- Docker
- Docker compose

## Baixando e preparando o projeto 
1. Realize o clone desse repositorio usando o comando :
```shell
git clone https://github.com/felipesergios/simpleAPI.git
```

2. Copia o conteudo do .env.example para .env (criando o novo arquivo)
```shell
cp .env.example .env
```

3. agora basta editar com as informações do seu servidor , 
- observação : caso queira utilizar o docker basta editar o SECRET :)
### Instalar sem Docker
1. Na pasta Raiz execute o comando abaixo para baixar as dependencias do projeto
```shell
npm install
# ou yarn install caso deseje utilizar esse gerenciador  
```
2. Realize as migrações e seeders do projeto usando o comando 
```shell
npm run knexmigall 
```
3. Por fim vamos iniciar a API usando 
```shell
npm dev
```
### Instalando com Docker
1. Realize o clone desse repositorio usando o comando :
```shell
git clone https://github.com/felipesergios/simpleAPI.git
```
2. Copia o conteudo do .env.example para .env (criando o novo arquivo)
```shell
cp .env.example .env
```
Agora basta Editar a variavel SECRET com algum HASH de sua preferencia 
3. Feito isso vamos executar o comando : 

```shell
docker-compose up -d
```
e dentro de alguns instantes a API já estará disponivel . 
- Para verificar se os containers estão em operação utilize 
```shell
docker ps | grep simple
# esse comando tem como saida os containers que contem "simple"
```
# Testando 
Verifique se a API está respondendo executando um request na rota raiz 
```shell
curl -X 'GET' 'http://localhost:3000' -H 'accept: aplication/json'
```
Acesse a API 
http://localhost:3000/doc
