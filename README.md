<h1 align="center">NestJS Starter - UTFPR</h1>

<p align="center">
  <img href="https://nestjs.com/" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" target="_blank">
  <img href="https://www.postgresql.org/" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" target="_blank">
  <img href="https://www.sqlite.org/index.html" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" target="_blank">
  <img href="https://jestjs.io/pt-BR/" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" target="_blank">
  <img href="https://circleci.com/" src="https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white" target="_blank">
  <img href="https://www.heroku.com/" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" target="_blank">
</p>

<p align="center">
  <!-- TAG CIRCLE CI -->
</p>

## Descrição

Repositório para desenvolvimento de aplicações web com o framework NestJS nas disciplinas de Engenharia de Software 1 e Projeto Integrador do câmpus Campo Mourão da UTFPR.	


Features:
- [x] Registro de usuários
- [x] Autenticação de usuários
- [x] CRUD To-Do
- [x] Testes E2E
- [x] CI/CD

## Instalação

```bash
# setting up environment variables file
$ cp .env.example .env

# installing dependencies
$ yarn
```

## Build

```bash
$ yarn build
```

## Execução

```bash
# development
$ yarn start:dev

# production mode
$ yarn start:prod

# debug mode
$ yarn start:prod
```

## Testes

```bash
# e2e tests
$ yarn test:e2e
```

# Instalar Docker Linux

Caso não tenha o docker em sua máquina, instale com os seguintes comandos:

```bash title="install_docker.sh"
chmod +x ./install_docker.sh
./install_docker.sh
```

# Configurando docker no Linux

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```
Após executar os comando acima, reinicie sua máquina!

# Instalar Docker Windows

preencher... (obs: instale linux logo cara)

# Configurando arquivo `docker-compose`

Para executar o conteiner corretamente, primeiramente realize a cópia do arquivo `.env.postgres.example`, renomeando o mesmo para `.env.postgres`.

```bash
cp .env.postgres.example .env.postgres
```

Após isso, abra o arquivo e preencha o campo `POSTGRES_PASSWORD` com a senha que deseja utilizar.

# Rodar Container do Banco de Dados

Basta executar o seguinte compando em seu terminal:

```bash
docker-compose up -d --build
```

