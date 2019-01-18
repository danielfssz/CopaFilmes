## Copa Filmes
A Copa do mundo de filmes funciona da seguinte maneira: uma lista inicial de 8 filmes é selecionada e, dentre esses filmes, são realizadas partidas para verificar quem é o vencedor. 
    
## Como executar o projeto:
É necessário clonar o repositório para uma pasta em seu computador.

A Copa de Filmes necessita do [.NET Core](https://dotnet.microsoft.com/download)v2.2 e o [Node.js](https://nodejs.org/en/)v10+ para executar, caso você não possua alguma dependência clique no link e faça o download.

Instalada as dependências, no terminal do seu sistema operacional entre na pasta do repositório e digite os comandos:
#### Front-End
```sh
$ cd client
$ npm install
$ npm start
```
Em uma nova janela do terminal, entre na pasta do repositório e digite os comandos:

#### Back-End
```sh
$ cd server
$ dotnet build
$ dotnet run
```

## Como executar os testes:
Entre na pasta raiz do repositório e digite os comandos:
#### Front-End
```sh
$ cd client
$ npm run test
```
Em uma nova janela do terminal, entre na pasta do repositório e digite os comandos:

#### Back-End
```sh
$ cd server
$ dotnet test
```
