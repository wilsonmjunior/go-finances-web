<h1 align="center">
  <img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975364/GoFinances/logo.408488e0_qpx4dy.svg" width="400"/>
</h1>

<p align="center">Practicing React.js along with Typescript, using routes and submitting files by form.</p>

## Screenshot

<img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975234/GoFinances/go-finances_ujdun8.png" width="600" />
<img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975289/GoFinances/go-finances_ge39rn.png" width="600" />

## How to use 

For using, first clone backend (server) <a href="https://github.com/wilsonmjunior/go-finances-api" target="_blank">Go Finances Api</a>

```bash
# Clone this repository
$ git clone <https://www.github.com/wilsonmjunior/go-finances-api>

# Access the project folder 
$ cd go-finances-api

# Install dependencies
$ yarn

# Create the container in the Docker
docker-compose -f "docker-compose.yml" up -d --build

# Run migrations
yarn typeorm migration:run

# Run the application in development 
yarn dev:server
```

now 

```bash
  # Clone this repository
  git clone https://github.com/wilsonmjunior/go-finances-web
  
  # Access the project folder 
  cd go-finances-web
  
  # Install dependencies
  yarn 
  
  # Run the application
  yarn start
  
```

## Technologies used

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

### Technologies in Front-End
- [React.js](https://pt-br.reactjs.org/)

### Technologies in Back-End
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

##  License

:memo: This project is under the MIT license. See the [LICENSE](https://github.com/wilsonmjunior/go-finances-web/blob/master/LICENSE) for more information.
