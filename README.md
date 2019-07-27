# This is a work-in-progress example of a fullstack JavaScript application. 

## The Stack: 
- MongoDB
- Express
- React.js
- Node.js

## Upcoming features: 
- user auth via JWT
- reddit-like lefthand panel/card for user stats
- likes/commenting
- more information in message cards (username, timestamp, likes, comments)

## Steps to run locally:

1) navigate to this projects directory after cloning the repo
2) switch to node version 10.16.0 or LTS
3) run `npm i`
4) in the root directory, run `npm run start` to start the express server
5) navigate to the client folder via `cd client` and run `npm run start`
6) start coding!

## Troubleshooting
- If you get an error that says the port number is already in use, go into `./index.js` and change the port number to something else. 
- Go into the client/package.json and change the proxy port number to match the previous change.