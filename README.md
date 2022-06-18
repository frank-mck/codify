# Codify

This is an ongoing solo project built to consolidate what I had learnt at Makers Academy, learn new technologies and to keep my skills fresh while job hunting. 

## Description 

A productivity website that helps users organise their tasks.
Deployed here: https://codify-tasks.netlify.app/

## Tech stack

- MongoDb
- Express
- React
- Node.js 
- TypeScript
- CircleCI
- Heroku(backend)
- Netlify(front-end)
- JavaScript
- Bcrypt

## Technical Skills

- Authentication(JSON Web Token)
- Front-end development
- Back-end Developemnt
- REST APIs
- Testing - Jest, React-testing-library
- CSS
- UI/UX Design

Users will be authenticated using JSON web tokens that get sent to the API endpoints in the headers. `Authorization: Bearer [token]`.

When a user signs up, the password gets hashed using bcrypt and then stored in the database.

Each user is verified using bcrypt. Once that's complete, a token is released and then stored in the localStorage to access private routes.

## User Stories
```
As a user
So i can organise my tasks
I want to create a tas

As a user
So i can manage my tasks
I want to update a task

As a user
So i can manage my tasks
I want to delete a task

As a user
So i can add tasks on my productivity app
I want to sign up

As a user 
So that only I can add tasks on my productivity app as me
I want to log in

As a user
So that i can avoid others adding tasks as me
I want to sign out
```
More advanced user stories coming...

## Setup .env variables

Front-end:
In the root folder create a .env file and store the following:

```
REACT_APP_JWT_SECRET=your_secret_key
REACT_APP_SERVER = http://localhost:3002/api/v1/
```

You can create a secret key but typing the following in the terminal:
```
node
require('crypto').randomBytes(35).toString('hex');
```

Back-end:
Cd into the server folder and create another .env file and store the following:
```
DATABASE = 'mongodb://localhost/name-of-your-database'
TEST_DATABASE='mongodb://localhost/name-of-your-test-database'
PORT = 3002
TASK_COLLECTION = task
USER_COLLECTION = user

JWT_SECRET = your_secret_key
JWT_EXPIRE=choose when you want the json web key to expire.
```

## Install dependencies and start application

At the root type the following into the terminal:
```
npm install
npm start
```

Then cd into server then type the following:
```
npm install
npm run dev
```

## To run tests

Front-end: `npm run test`
Back-end: `npm run test`
