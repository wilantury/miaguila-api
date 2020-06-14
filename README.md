# Miaguila API Rest - Node.js and Mongo DB

This API Rest was developed using JavaScript, Node.js and Mongo DB. This API is able to create, update and fetch( filter by city, sorted by data asc&desc and pagination) trips from a NoSQL Mongo DB.

  

#### Github work flow

- Create a project with Kanban board to organize and follow the tasks.

- Add tasks into kanban board, and then convert these tasks in issues.

- Create a Milestone to track the tasks. It needs to has a deadline.

- Create a Branch for each feature, then push it to repository.

  

#### Backend architecture

Network layer (Endpoints - Routes - middlewares) | Security Layer (Not implemented) |Controller Layer (Logic)| Services | Store (DB model) | Mongo DB
------------ | ------------- | ------------- |----- | ----------------- | -------

#### Resources

- Schema (JSON) to execute request using Postman.

- API documentation.

- Source code of application.
- .env.example : you need to fill out the environment variables.
  

## Get started

> You will need to complete the following tasks to run this project.

## Option 1: Mongo DB Service - Docker

> This project will need a Mongo database, here the steps to create a service using Docker.

1. Go to project directory

2. In the command line terminal type: ``` docker-compose up -d mongo ```

3. Wait until mongo image get up.

4. Now you have Mongo DB running on your local environment

### Import a JSON file into Mongo DB - Docker Container.

>If you have a JSON file with data, follow these steps to import into Mongo

>> The JSON need to be like: [ {"key":{ "key":"value" } }, {"key":{ "key":"value" } } , . . . ] . (Not the same, this is just for reference)

1. Move the JSON file into Docker container: ``` docker cp trips.json [id_container]:/data ```

2. Go into container bash: ``` docker-compose exec mongo bash ```

3. Import the JSON file to Mongo: ``` mongoimport -d miaguila -c trips --file trips.json --jsonArray```

4. Now you have populated the data base.

## Option 2: Cloud Mongo Atlas Cluster
> You can create a Mongo Atlas cluster for free to start. [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
1. Create one cluster, one database (miaguila) and one collection (trips).
2. Download [Mongo Compass](https://www.mongodb.com/try/download/compass)
3. Connect to Cluster using the credentias of your database (user and password).
4. Import a JSON file to Collection using Mongo Compass.
5. That is all.
## Clone repository

  

```git clone https://github.com/wilantury/miaguila-api.git```

### Install dependencies

```cd miaguila-api```

``` npm install ```

### Fill out the environment variables
> You need to fill out the .env file with environment variables.  Use the .env.example file as guide.
### Start server

```npm run dev``` to development ( Connect to Docker Container - Mongo Image )

``` npm start ``` to production ( Connect to Cloud Mongo Atlas )

> API server will be running at http://localhost:3000

# API documentation

> The API documentation was written using [swagger](http://editor.swagger.io/) application

### Open API documentation

> Go to: ([http://127.0.0.1:3000/api/documentation/swagger/](http://127.0.0.1:3000/api/documentation/swagger/))