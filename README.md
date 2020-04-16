# Deployment

In order to deploy the backend for our MEAN project, we need to setup our environments variables properly. In general, all environment specific variables and variables you don't want to upload to the repository because of security risks, need to be in the .env file. It's assumed that you already have your db deployed on something like MongoDB Atlas. For this project you need at least the following variables:

* the mongodb connection string
* the port number
* the orgins in the cors settings (they should point to netlify or wherever the client is deployed)
* any secrets, like session or cookie secrets

Depending on your project, you might want to add more values to the .env file, like your api keys. This project has the following .env files:

```
SESSION_SECRET=mysessionsecret
client_origin_a=httpsNetlifyOrigin  
client_origin_b=httpNetlifyOrigin
mongodb_connection_string=myMongodbConnectionString
````

Before you deploy your app, make sure that your app still works locally with a .env file that has values for development. For example:

````
SESSION_SECRET=someSessionSecret
client_origin_a=http://localhost:3001
client_origin_b=https://localhost:3001
mongodb_connection_string=mongodb://localhost/ironhack
````

Don't forget the dotenv package! Now, test if your project still works locally. Does it? Good! Commit your changes, create a heroko dyno with the heroku cli and push to heroku (`heroku login` `heroku create` `git push heroku master`). These step are the same as in module 2. Wait with adding the .env variables in heroku after you deployed your client (REACT) as well.