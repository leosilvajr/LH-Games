# LH-Games

Este projeto é um aplicativo Angular que implementa um CRUD (Create, Read, Update, Delete) baseado em um arquivo JSON. Ele utiliza Angular Material, Bootstrap e inclui um componente de login com as credenciais pré-definidas.

## Instalação

Para configurar e executar o projeto localmente, siga estes passos:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone este repositório do GitHub:

   ```bash
   git clone https://github.com/seu-usuario/lh-games.git

1. Navegue até o diretório do projeto:
   ```bash
   cd lh-games

3. Instale as dependências do projeto:
   ```bash
   npm install

## Executando o Servidor JSON
Para utilizar o servidor JSON necessário para o funcionamento do CRUD, é preciso executar o JSON Server. Caso não o tenha instalado globalmente, execute o seguinte comando:
     npm install -g json-server

Em seguida, inicie o servidor JSON:
json-server --watch db.json

Isso iniciará o servidor na porta padrão 3000.

Utilização
Após a instalação e a execução do servidor JSON, você pode rodar o aplicativo Angular. Utilize o seguinte comando:
ng serve

Isso iniciará o aplicativo na porta padrão 4200. Abra o seu navegador e acesse http://localhost:4200 para visualizar o aplicativo.

Credenciais de Login
O componente de login utiliza as seguintes credenciais:

Usuário: admin
Senha: admin
Certifique-se de usar essas credenciais para acessar o sistema de login.

Tecnologias Utilizadas
Angular
Angular Material
Bootstrap
JSON Server
