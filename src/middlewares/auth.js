const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const authConfig = require('../config/auth')

module.exports = async (req, res, next) => {
  const authHeaders = req.headers.authorization

  if(!authHeaders) {
    return res.status(401).json({ message: 'É necessário estar logado para acessar esse serviço'})
  }

  const [ , token ] = authHeaders.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    req.userId = decoded.id
    console.log(decoded)

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido'})
  }
}