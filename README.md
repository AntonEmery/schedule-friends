## Introduction
This project is a starter for a full stack web app. It uses React (comming soon!), Node/Express, and Postres, along with Docker for containerization.

### Prerequisites
[Docker](https://www.docker.com/)  
[Node](https://nodejs.org/en)

### Getting Started

1. Clone the repo
```sh
git clone https://github.com/AntonEmery/web-app-docker-starter
```
2. Install NPM packages
 ```sh
   npm install
   ```
3. Create a `.env` file and populate it with the desired values for user, password, and db name.
```
DB_USER=db_username
DB_PASSWORD=db_password
DB_NAME=db_name
// The DB_HOST needs to be set to the name of the db service in docker-compose.yml,
// so the Express app can connect to it inside docker.
DB_HOST=db
DB_PORT=5432
```
4. Make sure Docker Desktop is running.
5. Start up the app by running `docker-compose up` in the command line
6. Navigate to `localhost:3000` in your browser, and you should see the basic user seed data.

### Useful Commands
#### Starting the app
`docker-compose up`

#### Stopping the app
```sh
docker-compose kill
docker-compose down
```
You can also just use `docker-compose down`, but i find it takes longer

#### Remove all remove all stopped containers, unused volumes, networks, and images
```sh
docker system prune
```
Note, this will still leave your database intaact. 

#### Completely wipe the database
```sh
docker volume ls
```
You should see something like
```
DRIVER    VOLUME NAME
local     your-project_db_data
```
Run `docker volume rm your-project_db_data` to totally wipe the local database.



