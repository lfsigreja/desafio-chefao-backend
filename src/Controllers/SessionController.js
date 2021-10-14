const User = require("../models/User");
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = {
  async store(req, res) {
    const { email, password_hash } = req.body;

    const user = await User.findOne({ where: { email }})

    if (!user) {
      return res.status(401).json({
        error: 'Usuário não encontrado'
      })
    }

    if (!(await user.checkPassword(password_hash))) {
      return res.status(401).json({ error: 'Senha inválida'})
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({id}, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}