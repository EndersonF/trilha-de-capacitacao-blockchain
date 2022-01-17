<div align ="center" id="code-matrix">
    <img src="https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif" alt="The Matrix GIF" width="500px" height="400px" left="0px" top="0px" opacity="0px"/></div>

<h1 align="Center">
<a href="https://github.com/EndersonF/trilha-de-capacitacao-blockchain"><font color ="#00FA9A">Desafio NodeJS APIs - Bloco de Notas</font></a>

[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
![GitHub repo size](https://img.shields.io/github/repo-size/EndersonF/trilha-de-capacitacao-blockchain)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

<p align="center">
  <a href="#vulcan_salute-Sobre"><font color="#F0F8FF">Sobre</font></a> &#xa0; | &#xa0; 
  <a href="#hammer_and_wrench-Tecnologias"><font color="#F0F8FF">Tecnologias</font></a> &#xa0; | &#xa0;
  <a href="#warning-Requisitos"><font color="#F0F8FF">Pré-requisitos</font></a> &#xa0; | &#xa0;
  <a href="#test_tube-Experimentos"><font color="#F0F8FF">Pré-requisitos</font></a> &#xa0; | &#xa0;
  <a href="#memo-Licença"><font color="#F0F8FF">Licença</font></a> &#xa0; | &#xa0;
  <a href="https://github.com/EndersonF"target="_blank"><font color="#F0F8FF">Autor</font></a>
</p>
</h1>

---
## :vulcan_salute: Sobre ##
### **Esta API foi desenvolvida para o programa de bolsas - Blockchain. O desafio passado teve a finalidade de criar uma API cuja sua funcionalidade assemelha-se ao Trello ou a um Bloco de Notas.**

## :hammer_and_wrench: Tecnologias ##
### **As seguintes ferramentas foram usadas na construção do projeto:**
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/v7/)

## :warning: Pré-requisitos ###
### **Antes de começar, você vai precisa ter instalado em sua márquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/downloads/) e [Sequelize](https://sequelize.org/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)**
```bash
# Clone este repositório - No caso irá baixar todos os arquivos do repositório, mas é só escolher a pasta Desafio-NodeAPI
$ git clone <https://github.com/EndersonF/trilha-de-capacitacao-blockchain.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-NodeAPI

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev start

# O servidor inciará na porta:3003 - acesse <http://localhost:3003/api/nome-da-rota> Você pode consultar uma rota na pasta api - routes - notas-rotas.js
```
## :test_tube: Experimentos
## **Criação de projeto**
1. Nesta etapa você deveria criar a inserção de uma task na base dados.
* **Request - POST** `http://localhost:3000/api/project`
```bash
  {
    "id": 9,
    "title": "cadastrar e fazer backup dos dados",
    "description": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas r",
    "createdAt": "2022-01-17T17:21:29.000Z",
    "updatedAt": "2022-01-17T17:21:29.000Z",
    "owner": [
      {
        "id": 11,
        "title": "desenvolver endpoint para cadastro de produto",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:27:22.000Z",
        "updatedAt": "2022-01-17T17:37:58.000Z",
        "nota_id": 9
      },
      {
        "id": 12,
        "title": "desenvolver endpoint para realizar a baixo do produto",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:28:59.000Z",
        "updatedAt": "2022-01-17T17:37:01.000Z",
        "nota_id": 9
      }
    ]
  }
```

####  **Observações**
- ### Atente-se que a propriedade/key owner é um array contendo as o titulo da tarefa, a relevância da mesma, se já esta completa, além das datas de criação e update.
- ### Caso de sucesso na criação o status code deverá ser <font color ="green">**200/201**</font>(Created).
- ### Todos os campos são **required**', ou seja, são obrigatórios serem inseridos.

## Listagem de todos os projetos
1. Nesta etapa você deveria listar todas as task na base de dados.
* **Request - GET** `http://localhost:3000/api/project`
```bash
[
  {
    "id": 3,
    "title": "Cadastrar usuários na banco de dados",
    "description": "Deve cadastrar todos os funcionários do setor de blockchain no banco de dados e assim que tiver pronto enviar e-mail para os usuários responsáveis.",
    "createdAt": "2022-01-17T16:06:51.000Z",
    "updatedAt": "2022-01-17T16:06:51.000Z",
    "owner": [
      {
        "id": 5,
        "title": "desenvolver endpoint para cadastro de produto",
        "taskRelevance": 10,
        "completed": false,
        "createdAt": "2022-01-17T16:25:20.000Z",
        "updatedAt": "2022-01-17T16:25:20.000Z",
        "nota_id": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "controle de estoque",
    "description": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas realizadas.",
    "createdAt": "2022-01-17T16:09:22.000Z",
    "updatedAt": "2022-01-17T16:09:22.000Z",
    "owner": [
      {
        "id": 7,
        "title": "desenvolver endpoint para realizar a baixo do produto",
        "taskRelevance": 10,
        "completed": false,
        "createdAt": "2022-01-17T16:31:09.000Z",
        "updatedAt": "2022-01-17T16:31:09.000Z",
        "nota_id": 4
      }
    ]
  },
  {
    "id": 5,
    "title": "Formatar os computadores dos estagiários",
    "description": "Colocar sistema operacional Windows 11.",
    "createdAt": "2022-01-17T16:11:38.000Z",
    "updatedAt": "2022-01-17T16:11:38.000Z",
    "owner": [
      {
        "id": 6,
        "title": "desenvolver endpoint para realizar a baixo do produto",
        "taskRelevance": 10,
        "completed": false,
        "createdAt": "2022-01-17T16:27:18.000Z",
        "updatedAt": "2022-01-17T16:27:18.000Z",
        "nota_id": 5
      }
    ]
  },
  {
    "id": 9,
    "title": "cadastrar e fazer backup dos dados",
    "description": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas r",
    "createdAt": "2022-01-17T17:21:29.000Z",
    "updatedAt": "2022-01-17T17:21:29.000Z",
    "owner": [
      {
        "id": 11,
        "title": "desenvolver endpoint para cadastro de produto",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:27:22.000Z",
        "updatedAt": "2022-01-17T17:37:58.000Z",
        "nota_id": 9
      },
      {
        "id": 12,
        "title": "desenvolver endpoint para realizar a baixo do produto",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:28:59.000Z",
        "updatedAt": "2022-01-17T17:37:01.000Z",
        "nota_id": 9
      }
    ]
  }
]
```
####  **Observações**
- ### Atente-se que esta listagem trás todos os dados contidos na base de dados.
- ### Caso os dados sejam encontrados o status code retornado deverá ser <font color ="green">**200.**</font>
## **Listagem de projetos por ID**
1. Nesta etapa você deverá listr uma task baseado no id repassado
* **Request - GET** `https://localhost:3003/api/project/:id`

```
{
  "id": 9,
  "title": "cadastrar e fazer backup dos dados",
  "description": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas r",
  "createdAt": "2022-01-17T17:21:29.000Z",
  "updatedAt": "2022-01-17T17:21:29.000Z"
}
```
####  **Observações**
- ### Lembre-se que o id de busca é repassado pela URL.
- ### Este retorno deverá trazer apenas 1 item.
- ### Caso os dados sejam encontrados o status code retornado deverá ser <font color ="green">**200.**</font>

## **Atualização de um projeto por ID**
1. Nesta etapa você poderá atualizar os dados de uma tarefa, com por exemplo mudar o title ou a description da tarefa, baseado no id repassado.
* **Request - PUT** `http://localhost:3000/api/project/:id`

```
{
    "id": 9,
    "title": "cadastrar e fazer backup dos dados",
    "description": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas r",
    "createdAt": "2022-01-17T17:21:29.000Z",
    "updatedAt": "2022-01-17T17:21:29.000Z",
    "owner": [
      {
        "id": 12,
        "title": "desenvolver endpoint para realizar a baixo do produto",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:28:59.000Z",
        "updatedAt": "2022-01-17T17:37:01.000Z",
        "nota_id": 9
      },
      {
        "id": 11,
        "title": "desenvolver endpoint para cadastro de produto. ATUALIZADO",
        "taskRelevance": 8,
        "completed": false,
        "createdAt": "2022-01-17T17:27:22.000Z",
        "updatedAt": "2022-01-17T18:42:28.000Z",
        "nota_id": 9
      }
    ]
  }
```
#### Atenção:
- ### Qualquer campo pode ser alterado
- ### Caso o ID não exista, nada deverá ser alterado, e o status code retornado deverá ser <font color ="orange">**404.**</font>
- ### Caso os dados sejam encontrados o status code retornado deverá ser <font color ="green">**200.**</font>

## **Delete um projeto por ID**
1. Nesta etapa você ira deletar uma tarefa da base de dados.
* **Request - DELETE** `http://localhost:3000/api/project/:id`

#### **Atenção**
- ### Em caso de sucesso retornar <font color ="green">**204**</font>com body vazio
- ### Caso o **ID** não seja encontrado retornar um <font color ="red">404.</font>


## 📝 **Licença** ##
#### O projeto presente está sob licença do MIT. Você pode consultar em [LICENSE!](https://github.com/EndersonF/trilha-de-capacitacao-blockchain/blob/main/LICENSE) 
---
### Autor: **Enderson Frazão🤟** ###
