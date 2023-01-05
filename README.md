# Github Search
> Uma aplicação simples para buscar usuários e seus repositórios do github.

## Conteúdo
- [Stack](#stack)
- [Organização](#organização)
- [Rodando a aplicação local](#rodando-a-aplicação-local)
- [Testes](#testes)

Você pode acessar a [aplicação online neste link](https://gus-app.netlify.app/) ou [executar local seguindo essas instruções](#rodando-a-aplicação-local)

Este projeto é uma aplicação bem simples que tem como objetivo buscar usuários e
seus repositórios do github. Abaixo eu quero falar um pouco sobre as decisões
que tomei durante o desenvolvimento.

### Stack
Sobre a stack por requisito estou utilizando `React`, `Styled-Componentes` para estilos
e `Redux` para gerenciamento de estado que recebemos do backend.

### Organização
A aplicação tem a seguinte organização:

#### src/components
Componentes mais simples que não fazem parte de funcionalidades da aplicação e podem ser usados de forma _global_ na aplicação.

#### src/features
Funcionalidades como `search` e `history` dentro de cada funcionalidade existe uma estrutura parecida com a do root, onde fica contido as coisas utilizadas por
essa aplicação.

#### src/hooks
Hooks que podem ser usados de forma geral pela aplicação.

#### src/lib
Configurações de bibliotecas que são utilizadas pela aplicação para que ela funcione como o esperado.

#### src/mocks
Configuração do `msw` _(mock service worker)_ uma biblioteca que auxilia tanto no desenvolvimento quanto nos testes evitando mocks de `fetch` e apis.

#### Sobre as features
Cada `feature` contém ou pode conter a seguinte estrutura:

```
.
├── components
│   ├── index.ts
│   ├── list-item.tsx
│   ├── list-link.tsx
│   ├── list.tsx
│   └── title.tsx
├── functions
│   ├── format-date.ts
│   └── sort-by-date.ts
├── history.test.tsx
├── index.ts
└── pages
    └── index.tsx
```

#### Estrutura completa
```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── css-reset.tsx
│   │   ├── empty-state.tsx
│   │   ├── flex.tsx
│   │   ├── header-link.tsx
│   │   ├── index.ts
│   │   ├── layout.tsx
│   │   ├── logo.tsx
│   │   └── main.tsx
│   ├── features
│   │   ├── history
│   │   │   ├── components
│   │   │   │   ├── index.ts
│   │   │   │   ├── list-item.tsx
│   │   │   │   ├── list-link.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── title.tsx
│   │   │   ├── functions
│   │   │   │   ├── format-date.ts
│   │   │   │   └── sort-by-date.ts
│   │   │   ├── history.test.tsx
│   │   │   ├── index.ts
│   │   │   └── pages
│   │   │       └── index.tsx
│   │   └── search
│   │       ├── actions
│   │       │   └── search.ts
│   │       ├── components
│   │       │   ├── index.ts
│   │       │   ├── repository
│   │       │   │   ├── card.tsx
│   │       │   │   ├── description.tsx
│   │       │   │   ├── index.ts
│   │       │   │   ├── link.tsx
│   │       │   │   ├── metadata.tsx
│   │       │   │   ├── name.tsx
│   │       │   │   └── tags.tsx
│   │       │   ├── search
│   │       │   │   ├── index.ts
│   │       │   │   ├── search-button.tsx
│   │       │   │   ├── search-form.tsx
│   │       │   │   ├── search-icon.tsx
│   │       │   │   └── search-input.tsx
│   │       │   └── user
│   │       │       ├── bio.tsx
│   │       │       ├── card.tsx
│   │       │       ├── email.tsx
│   │       │       ├── handler.tsx
│   │       │       ├── header.tsx
│   │       │       ├── image.tsx
│   │       │       ├── index.ts
│   │       │       └── name.tsx
│   │       ├── index.ts
│   │       ├── pages
│   │       │   └── index.tsx
│   │       ├── reducers
│   │       │   └── search.ts
│   │       ├── search.test.tsx
│   │       └── types.ts
│   ├── hooks
│   │   └── use-localstorage.ts
│   ├── index.tsx
│   ├── lib
│   │   ├── request.ts
│   │   └── store.ts
│   ├── mocks
│   │   ├── browser.ts
│   │   ├── handler.ts
│   │   └── server.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── test-renders.tsx
└── tsconfig.json
```

### Rodando a aplicação local
1. Clone este repositório `git clone git@github.com:uselessdev/github-user-search`
2. Entre na pasta do projeto `cd github-user-search`
3. Instale as dependências `npm i`
4. Execute o modo de desenvolvimento com `npm start`
5. A aplicação pode ser acessada via http://localhost:3000

#### Testes

Para rodar os testes basta rodar o seguinte comando: `npm run test`
