# 🎬 Prime Flix

Aplicação web para busca e gerenciamento de filmes, construída com **React** e **Vite**, utilizando a [OMDb API](https://www.omdbapi.com/) como fonte de dados.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Rotas da Aplicação](#rotas-da-aplicação)
- [Componentes e Páginas](#componentes-e-páginas)
- [Estilização](#estilização)
- [API Utilizada](#api-utilizada)
- [Armazenamento Local](#armazenamento-local)

---

## Sobre o Projeto

O **Prime Flix** é uma aplicação SPA (Single Page Application) que permite ao usuário explorar filmes relacionados a "Batman" (como busca padrão), visualizar detalhes de cada título, salvar seus filmes favoritos em uma lista pessoal e removê-los quando quiser. Os dados persistem entre sessões por meio do `localStorage`.

---

## Funcionalidades

- Listagem de filmes buscados via OMDb API
- Visualização da página de detalhes de cada filme (título, poster, sinopse e avaliação)
- Salvar filmes em uma lista de favoritos persistida no `localStorage`
- Exibição da lista de filmes salvos
- Remoção individual de filmes da lista de favoritos
- Navegação entre páginas com React Router DOM
- Página de erro 404 para rotas inexistentes

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | Biblioteca principal de UI |
| [React DOM](https://react.dev/) | ^19.2.5 | Renderização no navegador |
| [React Router DOM](https://reactrouter.com/) | ^7.14.2 | Gerenciamento de rotas |
| [Vite](https://vite.dev/) | ^8.0.10 | Bundler e servidor de desenvolvimento |
| [ESLint](https://eslint.org/) | ^10.2.1 | Linting de código |
| [OMDb API](https://www.omdbapi.com/) | — | Fonte de dados de filmes |

---

## Estrutura de Pastas

```
prime-flix/
├── public/
│   └── PrimeFlix.png          # Ícone da aplicação
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho global com navegação
│   │   └── Erro.jsx            # Página de erro 404
│   ├── pages/
│   │   ├── App.jsx             # Página inicial — listagem de filmes
│   │   ├── Filme.jsx           # Página de detalhes de um filme
│   │   └── Favoritos.jsx       # Página de filmes salvos
│   ├── routes/
│   │   └── AppRoutes.jsx       # Definição de todas as rotas
│   ├── style/
│   │   ├── main.css            # Estilos globais e do header
│   │   ├── filme.css           # Estilos da página de detalhes
│   │   ├── favoritos.css       # Estilos da página de favoritos
│   │   └── error.css           # Estilos da página de erro
│   └── main.jsx                # Ponto de entrada da aplicação
├── index.html                  # HTML base
├── package.json
└── vite.config.js
```

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/prime-flix.git

# 2. Acesse a pasta do projeto
cd prime-flix

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (porta padrão do Vite).

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

---

## Rotas da Aplicação

| Caminho | Componente | Descrição |
|---|---|---|
| `/` | `App.jsx` | Página inicial com listagem de filmes |
| `/filme/:id` | `Filme.jsx` | Detalhes de um filme pelo seu `imdbID` |
| `/favoritos` | `Favoritos.jsx` | Lista de filmes salvos pelo usuário |
| `*` | `Erro.jsx` | Página de erro 404 para rotas não encontradas |

---

## Componentes e Páginas

### `Header.jsx`
Cabeçalho exibido em todas as páginas. Contém o nome da aplicação e um botão de acesso à página de favoritos.

### `App.jsx` — Página Inicial
Realiza uma requisição à OMDb API buscando filmes com o termo "batman". Exibe uma lista com poster, título e botão de acesso para cada filme. Utiliza o hook `useEffect` para buscar os dados na montagem do componente e `useState` para armazenar os resultados.

### `Filme.jsx` — Detalhes do Filme
Recebe o `imdbID` via parâmetro de URL (com `useParams`) e busca os detalhes do filme na API. Exibe título, poster, sinopse e avaliação. Permite ao usuário salvar o filme nos favoritos — com verificação de duplicidade antes de persistir no `localStorage`.

### `Favoritos.jsx` — Lista de Favoritos
Lê a lista de filmes salvos do `localStorage` ao montar o componente. Permite navegar para a página de detalhes de cada filme ou removê-lo da lista, atualizando tanto o estado local quanto o `localStorage`.

### `Erro.jsx` — Página 404
Componente simples exibido quando o usuário acessa uma rota inexistente.

### `AppRoutes.jsx`
Centraliza toda a configuração de rotas usando `BrowserRouter`, `Routes` e `Route` do React Router DOM.

---

## Estilização

O projeto utiliza **CSS puro**, com arquivos separados por escopo:

- `main.css` — reset global, estilos do `<header>` e da listagem principal
- `filme.css` — layout da página de detalhes, incluindo responsividade para telas menores que 1024px
- `favoritos.css` — layout da lista de favoritos com itens em linha
- `error.css` — centralização da mensagem de erro 404

---

## API Utilizada

**OMDb API** — [https://www.omdbapi.com/](https://www.omdbapi.com/)

| Endpoint | Uso |
|---|---|
| `?s=batman&apikey=KEY&page=1` | Busca lista de filmes pelo título |
| `?i=IMDB_ID&apikey=KEY` | Busca detalhes de um filme por ID |

> **Atenção:** A chave de API (`apikey`) está exposta diretamente no código fonte. Em produção, utilize variáveis de ambiente (`.env`) para proteger credenciais sensíveis.

---

## Armazenamento Local

Os filmes favoritados são persistidos no `localStorage` do navegador sob a chave `@filmes`, como um array de objetos JSON. Isso garante que a lista seja mantida mesmo após o fechamento do navegador.

```js
// Salvar
localStorage.setItem("@filmes", JSON.stringify(lista_de_filmes))

// Recuperar
const lista = JSON.parse(localStorage.getItem("@filmes")) || []
```

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
