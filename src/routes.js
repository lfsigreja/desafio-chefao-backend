const express = require('express');
const multer = require('multer')

const authHeaders = require('./middlewares/auth')
const multerConfig = require('./config/multer')

const UserController = require('./Controllers/UserController');
const SessionController = require('./Controllers/SessionController')
const FileController = require('./Controllers/FileController')
const GymnasiumController = require('./Controllers/GymnasiumController')


const routes = express.Router();
const upload = multer(multerConfig)

// Cadastro e edição de usuários

routes.post('/users', UserController.store);
routes.put('/users', authHeaders, UserController.update);

// Login

routes.get('/login', SessionController.store);

// Upload de arquivos

routes.post('/files', upload.single('file'), FileController.store)

// Listagem de quadras

routes.get('/gymnasium', GymnasiumController.index)


module.exports = routes;
