# 📝 Aplicativo de Lista de Tarefas em React Native

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Aplicativo para gerenciamento de tarefas em React Native, utilizando Expo e TypeScript.

## 📚 Sumário
- [🚀 Como Rodar](#-como-rodar)
  - [📦 Requisitos](#-requisitos)
  - [🛠️ Caminho Fácil](#%EF%B8%8F-caminho-fácil)
  - [💻 Emulador](#-emulador)
- [✨ Funcionalidades](#-funcionalidades)
- [⚙️ Decisões Técnicas](#%EF%B8%8F-decisões-técnicas)
- [🚧 Melhorias](#-melhorias)
- [👏 Créditos](#-créditos)

# 🚀 Como Rodar

## 📦 Requisitos
- Node v20.13.1
- Yarn v1.22.21
- Windows, Linux ou iOS (WSL pode encontrar problemas)

Para rodar o projeto, primeiro clone este repositório:

`
git clone https://github.com/GabrielTrindadeC/todo-native.git
`


## 🛠️ Caminho Fácil
Com o projeto clonado, dentro da pasta raiz do projeto, siga os seguintes passos:

1. Instalar as dependências: **`yarn install`**
2. Iniciar o aplicativo: **`yarn start`**

A forma mais fácil de rodar o projeto é instalando o [Expo Go](https://docs.expo.dev/get-started/set-up-your-environment/) no seu dispositivo móvel e escaneando o QR Code que vai aparecer no seu terminal(tanto o computador quanto o dispositivo móvel devem estar na mesma rede):
![QR Code](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/8ea25491-277e-41f2-b4d0-681026102ca1)

## 💻 Emulador
Caso você queira rodar o aplicativo com emulador localmente, vai ser necessário [configurações adicionais](https://docs.expo.dev/guides/local-app-development) no seu ambiente de desenvolvimento. Com o emulador funcionando corretamente, siga os seguintes passos:

1. Instalar as dependências: **`yarn install`**
2. Iniciar o aplicativo: **`yarn start`**
3. Pressione a tecla "A", no terminal, para rodar o projeto no emulador Android

# ✨ Funcionalidades
- Criar Tarefas
  
  ![Criar](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/18d1e815-3601-489e-8c65-c7aa59b9ba8f)
  
- Deletar Tarefas
  
  ![Deletar](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/664a6abd-cda2-42c8-a426-ce6ac959d961)
  
- Editar Tarefas
  
  ![Editar](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/7dfabe05-d465-4766-867a-6c8dd835f710)
  
- Marcar/Desmarcar Tarefa como Concluída, filtrar tarefas concluídas ou por data de criação
  
  ![Marcar](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/01171534-6b41-45f2-b3bc-411f723ae706)
  
- Tema Claro/Escuro
  
  ![Tema](https://github.com/GabrielTrindadeC/todo-native/assets/76929097/01fb05da-a812-494e-b7e8-12bd11dc9835)

# ⚙️ Decisões Técnicas
### Algumas decisões técnicas foram tomadas para a criação deste aplicativo. Abaixo, explico algumas delas:

- **useReducer**: Utilizado em estados complexos (como tarefas), pois é mais otimizado para estados que contêm vários sub-valores, evitando re-renderizações desnecessárias.
- **useCallback e useMemo**: Ambos são capazes de memoizar estados/funções, evitando re-renderizações e recálculo dos valores. Exemplo: filtros das tarefas - caso as tarefas não sejam alteradas, ele não recalcula o filtro, apenas utiliza o estado memoizado do array de tarefas.
- **TypeScript**: Mantém uma tipagem consistente e segura da aplicação e um melhor uso do IntelliSense do VSCode.
- **Expo**: Facilita a criação de aplicativos React Native, abstraindo algumas questões de desenvolvimento em React Native puro e facilitando o build e deploy. Atualmente recomendado pela própria equipe do [React Native](https://reactnative.dev/docs/environment-setup) para criação de novas aplicações.
- **React Native Elements**: Um Design System para React Native, usado para manter a estilização dos componentes consistente.

# 🚧 Melhorias
Durante o desenvolvimento, identifiquei algumas áreas com espaço para melhorias:
- Tags de prioridade nas tarefas
- Possibilidade de agrupar tarefas em categorias ou pastas
- Internacionalização da aplicação
- Testes unitários e de integração

# 👏 Créditos
Para desenvolver, usei um layout da comunidade como inspiração:

[Figma](https://www.figma.com/design/zJhhs1C9ULZaica0sxoZWp/Todyapp---Todo-list-mobile-app-(Community)?node-id=2-34&t=KP8jC5GN8rKdiQ7B-0)
