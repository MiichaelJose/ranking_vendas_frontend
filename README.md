 # Estrutura do Projeto
Este projeto utiliza uma estrutura modular para organizar o código de maneira limpa e eficiente. Abaixo está a explicação de cada pasta no projeto:

## src/
- Pasta principal onde reside todo o código-fonte da aplicação.

## 1. components/
- Componentes reutilizáveis que podem ser usados em várias partes da aplicação. Esses componentes são genéricos e não dependem de uma página ou funcionalidade específica.

- Exemplo: Button.js, Modal.js, Card.js
## 2. hooks/
- Custom Hooks que encapsulam a lógica reutilizável. São funções que permitem a reutilização de estado e efeitos colaterais em vários componentes.

- Exemplo: useFetch.js, useAuth.js, useForm.js
## 3. pages/
- Páginas que representam as views principais da aplicação. Cada arquivo nesta pasta corresponde a uma página acessada via rota.

- Exemplo: HomePage.js, LoginPage.js, DashboardPage.js
## 4. routes/
- Arquivo(s) de configuração de rotas da aplicação. Define quais componentes são renderizados para cada caminho da URL.

- Exemplo: AppRoutes.js
## 5. services/
- Contém serviços que lidam com requisições HTTP e interação com APIs externas. Pode incluir lógica de autenticação, busca de dados ou outros serviços.

- Exemplo: apiService.js, authService.js
## 6. features/
- Agrupa funcionalidades ou módulos específicos do projeto. Cada pasta dentro de features pode conter páginas, componentes, hooks, etc., relacionados àquela funcionalidade.

- Exemplo: auth/, userProfile/, shoppingCart/
## 7. styles/
- Contém arquivos de estilo globais, como CSS, SASS ou arquivos de variáveis de temas, e arquivos que definem o layout da aplicação.

- Exemplo: global.css, theme.scss
## 8. assets/
- Armazena recursos estáticos da aplicação, como imagens, ícones, fontes, e arquivos de mídia.

- Exemplo: logo.png, background.jpg
## 9. contexts/
- Define contextos globais usando React Context API. É utilizado para compartilhar dados ou estados entre componentes de diferentes partes da aplicação.

- Exemplo: AuthContext.js, ThemeContext.js
## 10. utils/
- Funções utilitárias ou helpers que podem ser utilizadas em diversas partes da aplicação para evitar repetição de código.

- Exemplo: formatDate.js, debounce.js
