# 🌾 Cooperativa Raízes da Terra

Trabalho Final — Desenvolvimento Orientado a Objetos com TypeScript (UC4)

## 👤 Integrantes

- Erick Gustavo de Morais

## 📖 Descrição do projeto

A **Cooperativa Raízes da Terra** é formada por pequenos produtores de agricultura orgânica. Ela recebe os alimentos produzidos pelos cooperados, organiza o estoque e faz doações para instituições de caridade da região.

Este projeto é um sistema executado pelo **terminal**, desenvolvido em **TypeScript**, que permite:

- cadastrar produtores, alimentos e instituições;
- listar tudo o que está cadastrado;
- realizar doações de alimentos para instituições;
- tratar erros sem encerrar o programa (`try/catch`).

Todos os dados ficam **em memória** durante a execução. Não há banco de dados.

## 🛠️ Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já vem com o Node.js)

### Passo a passo

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

   Se for criar o projeto do zero, instale manualmente:

   ```bash
   npm install readline-sync
   npm install -D typescript ts-node @types/node @types/readline-sync
   ```

Execução em JavaScript:

```bash
npx tsc
node JS/Main.js
```

### Menu principal

```
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

### Como usar

1. Cadastre pelo menos um **produtor** (opção `1`).
2. Cadastre um **alimento** e escolha o produtor responsável (opção `2`).
3. Cadastre uma **instituição** (opção `3`).
4. Use as opções `4`, `5` e `6` para consultar os dados cadastrados.
5. Na opção `7`, escolha a instituição e o alimento a ser doado. O sistema mostra um recibo ao final.
6. Use `0` para sair.

Se algo inválido for digitado (opção inexistente, lista vazia, número fora do intervalo), o sistema mostra uma mensagem de erro e volta ao menu.

## 🧱 Principais classes

### `Producer` (classe abstrata)

Representa um produtor da cooperativa. Possui os atributos:

- `name` (`protected`): nome do produtor;
- `identify` (`private`): documento (CPF);
- `producedFoods` (`protected`): quantidade de alimentos produzidos.

O atributo `identify` é `private` para demonstrar **encapsulamento**: só pode ser lido dentro da própria classe. O método `showProducer()` exibe os dados em uma caixa formatada no terminal.

### `CreateProducer`

Classe concreta que **herda** de `Producer`. É usada no cadastro de produtores pelo menu, já que `Producer` é abstrata e não pode ser instanciada diretamente.

### `Food`

Representa um alimento cadastrado. Possui:

- `name`: nome do alimento;
- `category`: categoria;
- `quantityKilos`: quantidade em kg;
- `responsibleProducer`: produtor responsável (um objeto `Producer`).

Métodos principais: `showFood()` (exibe os dados) e `getName()` (retorna o nome).

### `Institution`

Representa uma instituição beneficiada. Possui:

- `name`: nome;
- `addres`: endereço;
- `numberPeopleServed`: quantidade de pessoas atendidas;
- `recivedDonated`: lista de alimentos já recebidos.

Métodos principais:

- `showInstitution()`: exibe os dados da instituição;
- `receiveFood(food: Food[])`: lista os alimentos disponíveis, pede a escolha do usuário, registra o alimento recebido e imprime o recibo da doação.

### `Auxiliares`

Módulo com funções de apoio usadas em todo o sistema:

- `ask`: instância do `readline-sync` para ler dados do terminal;
- `logger`: exibe o cabeçalho/menu principal;
- `stop()`: pausa a execução até o usuário pressionar ENTER.

### `Colors`

Funções de cor para o terminal (`green`, `red`, `white`, `blue`, `yellow`, `cyan`), usadas para deixar as mensagens e caixas mais legíveis.

### `Main`

Ponto de entrada do sistema. Mantém os arrays de produtores, alimentos e instituições em memória e executa o menu em um laço `while`. Todo o `switch` fica dentro de um `try/catch`, então erros previstos são mostrados ao usuário sem derrubar o programa.

## 🗂️ Estrutura do projeto

```
projeto/
├── src/
│   ├── Auxiliares/
│   │   ├── Auxiliares.ts
│   │   └── Colors.ts
│   ├── Class/
│   │   ├── Producer.ts
│   │   ├── CreateProducer.ts
│   │   ├── Food.ts
│   │   └── Institution.ts
│   └── Main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 💡 Conceitos de POO utilizados

- Classes, objetos e construtores
- Encapsulamento (`private` / `protected`) e getters
- Herança e classe abstrata
- Arrays tipados
- `try/catch` para tratamento de erros
- `readline-sync` para entrada de dados
- Organização em múltiplos arquivos