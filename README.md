# Virtual Stickerbook

- Frontend - React from `src/`
- Backend - Flask from `api/`
- Database - MongoDB
- Deploy server - Heroku

### Running the project 

To serve the front-end: `yarn start`

To serve the server: `yarn start-api`

You probably need to do both. 

### Downloading dependencies

Frontend: `yarn install` 

Backend: `source venv/bin/activate && pip install -r requirements.txt`

### Updating dependencies

Frontend: `yarn add [PACKAGE]`
Backend: `source venv/bin/activate && pip install PACKAGE && pip freeze > requirements.txt`

### Deploying

`yarn build && git push heroku master`

