# Mern Subscription App Boilerplate 🧰 
I developed this boilerplate for subscription web apps and SaaS for my restaurant menu handling software (Launching Soon 🚀)

## Tech Stack:
MongoDB, Express, React, NodeJS, and Stripe API

## Instructions:

First, install Node.js.
After Node.js has been installed, clone this repository and install modules using npm.

#### Client: 
To run the client side (front-end) enter the `/client` folder and run these commands on terimnal:

```
npm install
npm start
```

#### Server: 
To run the server side (back-end) enter the `/server` folder and add global variables in the `.env` file: 

```
DATABASE= * MongoDB connection key *
STRIPE_SECRET_KEY= * Stripe secret connection key *
CLIENT_URL= * Enter the port for the client side - in this case I use port 3000 (Ex: localhost:3000)*
PORT= * Enter the port for the server side program (Ex: localhost:8000) *
JWT_SECRET= * JSON Web Tokens secret key *
```

Then run these commands on terimnal:

```
npm install
npm start
```

## Conclusion

That's it! The program should run successfully. 
Open localhost:3000 (Or any port you specified) on your browser and start using the app.
