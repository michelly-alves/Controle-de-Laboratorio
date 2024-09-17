# Controle-de-Laboratorio
Projeto para a disciplina Projeto Integrador III - Universidade Federal do Ceará. Leia mais sobre em https://github.com/michelly-alves/Controle-de-Laboratorio/wiki
## Para rodar as aplicações siga os passos abaixo

- 1 Realizar o clone da aplicação

```bash
git clone https://github.com/michelly-alves/Controle-de-Laboratorio.git

```
- 2 Entrar na pasta do projeto

```bash
cd Controle-de-Laboratorio
```

- 3 Baixar as dependências

```bash
cd front-labSpace
cd front-end
npm install
``` 
<hr>

- 4 Subir o servidor web

```bash
ng serve --open
```
- 5 Tenha o banco 'ControleLaboratorio' criado no PhpMyAdmin sendo jdbc:mysql://${MYSQL_HOST:localhost}:3306/ControleLaboratorio

- 6 Inicialize a API em 
```bash
cd Controle-de-Laboratorio
mvn spring-boot:run
```

Por fim acesse o endereço `http://localhost:4200` onde o projeto está rodando



