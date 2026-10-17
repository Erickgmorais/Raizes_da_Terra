#  Cooperativa Raízes da Terra

**Trabalho Final --- Desenvolvimento Orientado a Objetos com TypeScript
(UC4)**

## 👤 Integrante

-   Erick Gustavo de Morais

## 📖 Descrição do projeto

A **Cooperativa Raízes da Terra** é formada por pequenos produtores de
agricultura orgânica. Ela recebe os alimentos produzidos pelos
cooperados, organiza o estoque e faz doações para instituições de
caridade da região.

Este projeto é um sistema executado pelo **terminal**, desenvolvido em
**TypeScript**, que permite:

-   Cadastrar produtores, alimentos e instituições;
-   Listar os registros cadastrados;
-   Realizar doações de alimentos para instituições;
-   Tratar erros sem encerrar o programa (`try/catch`).

Todos os dados ficam **em memória** durante a execução. Não há banco de
dados.

## 🛠️ Instalação

### Pré-requisitos

-   [Node.js](https://nodejs.org/) versão 18 ou superior;
-   npm, que já acompanha o Node.js.

### 1. Instale as dependências

Na pasta raiz do projeto, execute:

``` bash
npm install readline-sync
npm install -D @types/node
npm install -D @types/readline-sync
```

### 2. Compile e execute o projeto

Compile os arquivos TypeScript:

``` bash
npx tsc
```

Depois, execute o arquivo JavaScript gerado:

``` bash
node JS/Main.js
```

## ⚙️ Configuração do TypeScript (`tsconfig.json`)

O arquivo `tsconfig.json`, localizado na raiz do projeto, deve conter a
seguinte configuração:

``` json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./TS",
    "outDir": "./JS",

    "strict": true,
    "esModuleInterop": true,
    "types": ["node"]
  },
  "include": ["TS/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

**Atenção:** essa configuração considera que os arquivos TypeScript
ficam dentro da pasta `TS/` e que o JavaScript compilado será gerado na
pasta `JS/`. Mantenha essa estrutura ou ajuste os caminhos no
`tsconfig.json` para corresponder às pastas do seu projeto.

## 📋 Menu principal

``` text
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit

Choose an option:
```

## 🚀 Como usar

1.  Cadastre pelo menos um **produtor** (opção `1`).
2.  Cadastre um **alimento** e escolha o produtor responsável (opção
    `2`).
3.  Cadastre uma **instituição** (opção `3`).
4.  Use as opções `4`, `5` e `6` para consultar os registros
    cadastrados.
5.  Na opção `7`, escolha o alimento e, em seguida, a instituição que
    receberá a doação. Informe a quantidade para concluir a operação.
6.  Use a opção `0` para sair.

Se algo inválido for digitado --- como uma opção inexistente, uma lista
vazia ou um número fora do intervalo --- o sistema apresenta uma
mensagem de erro e retorna ao menu, conforme o tratamento implementado
com `try/catch`.

## 🧱 Principais classes

### `Producer` --- classe abstrata

Representa um produtor da cooperativa. Possui atributos como nome,
identificação e quantidade de alimentos produzidos. Por ser abstrata,
não pode ser instanciada diretamente.

### `CreateProducer`

Classe concreta que herda de `Producer` e permite criar objetos de
produtores.

### `Food`

Representa um alimento cadastrado. Entre seus atributos estão:

-   `name`: nome do alimento;
-   `category`: categoria do alimento;
-   `quantityKilos`: quantidade em quilos;
-   `currentStock`: estoque atual;
-   `responsibleProducer`: produtor responsável pelo alimento.

Possui métodos para consultar informações, exibir os dados, adicionar
quantidade, remover estoque e iniciar uma doação.

### `Institution`

Representa uma instituição beneficiada. Possui nome, endereço, número de
pessoas atendidas e uma lista de alimentos recebidos. O método
`receiveFood()` solicita a quantidade a ser doada, atualiza o estoque e
exibe o recibo.

### `Registry<T>`

Classe genérica utilizada para organizar, adicionar, listar e localizar
registros.

### `Auxiliares`

Módulo com funções de apoio utilizadas no sistema:

-   `ask`: entrada de dados no terminal por meio do `readline-sync`;
-   `logger`: função de saída baseada em `console.log`;
-   `stop()`: pausa a execução até o usuário pressionar ENTER.

### `Colors`

Módulo com funções para exibir mensagens coloridas no terminal, como
`green`, `red`, `white`, `blue`, `yellow`, `cyan`, `purple` e `orange`.

### `Main`

Ponto de entrada do sistema. Mantém os arrays de produtores, alimentos e
instituições em memória e executa o menu principal em um laço `while`. O
`switch` fica dentro de um `try/catch` para tratar erros previstos sem
encerrar o programa.

## 🗂️ Estrutura do projeto

``` text
projeto/
├── TS/
│   ├── Auxiliares/
│   │   ├── Auxiliares.ts
│   │   ├── Colors.ts
│   │   └── Enum.ts
│   ├── Class/
│   │   ├── Producer.ts
│   │   ├── CreateProducer.ts
│   │   ├── Food.ts
│   │   ├── Institution.ts
│   │   └── Registry.ts
│   ├── Interface/
│   │   └── Donatable.ts
│   └── Main.ts
├── JS/                 # Arquivos gerados pela compilação
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 💡 Conceitos de POO utilizados

-   Classes e objetos;
-   Construtores;
-   Encapsulamento (`private` e `protected`) e getters;
-   Herança e classe abstrata;
-   Interfaces;
-   Generics;
-   Arrays tipados;
-   Tratamento de erros com `try/catch`;
-   Entrada de dados com `readline-sync`;
-   Organização do código em múltiplos arquivos.
