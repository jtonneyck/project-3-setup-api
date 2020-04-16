# Deployment

In order to deploy the backend for our React project, we need to setup our environments variables properly. In general all environment specific values need to be in the .env files and values you don't want to upload to the repository because of security risks. For this project that are at least the following values:

* the mongodb connection string
* the port number
* the orgins in the cors settings (they should point to netlify or wherever the client is deployed)
* any secrets, like session or cookie secrets

Depending on your project, you might want to add more values to the .env file, like your api keys. My .env files has the following:

```
SESSION_SECRET=mysessionsecret
client_origin_a=httpsNetlifyOrigin  
client_origin_b=httpNetlifyOrigin
mongodb_connection_string=myMongodbConnectionString
````

Before you deploy your app, make sure that your app still works locally with a .env file that has values for development. For example

````
SESSION_SECRET=someSessionSecret
client_origin_a=http://localhost:3001
client_origin_b=https://localhost:3001
mongodb_connection_string=mongodb://localhost/ironhack
````

Does it still work? Good! Commit your changes, create an heroko dyno with the heroku cli and push to heroku. These step are the same as in module 2. Wait with adding the .env variables in heroku after you deployed your client as well.