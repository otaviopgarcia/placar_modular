# 🏆 Placar Modular

Aplicação desenvolvida em React para simular um placar de jogo com controle de pontuação, posse de bola e histórico de jogadas.

O projeto foi desenvolvido como exercício prático da disciplina de Desenvolvimento Web, com foco na utilização de componentes, `props` e gerenciamento de estado com `useState`.

## 📋 Sobre o projeto

A aplicação permite acompanhar a pontuação de dois times, controlar qual time possui a bola e registrar as jogadas realizadas durante a partida.

O projeto utiliza uma arquitetura modular, separando a interface em componentes reutilizáveis.

## 🚀 Funcionalidades

- Exibição da pontuação dos Times A e B
- Pontuação de +1, +2 e +3 pontos
- Controle de posse de bola
- Indicação do time que está atacando
- Histórico das jogadas realizadas
- Componentização da aplicação
- Gerenciamento de estado com `useState`

## 🧩 Estrutura do projeto

```text
src/
├── components/
│   ├── Placar.jsx
│   ├── AcoesJogo.jsx
│   └── Historico.jsx
├── App.jsx
└── main.jsx
