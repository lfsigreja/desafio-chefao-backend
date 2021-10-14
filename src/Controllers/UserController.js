const { update } = require('../models/User');
const User = require('../models/User')
module.exports = {
  async store(req, res) {

    const userExist = await User.findOne({
      where: {email: req.body.email }
    })

    if (userExist) {
      return res.status(400).json({
        error: 'Usuário já cadastrado'
      })
    }
    
    const { name, email, cellphone, password_hash, img, address } = req.body;

    const user = await User.create({
      name,
      email,
      cellphone,
      password_hash,
      address,
    });

    return res.json(user);
  },

  async update(req, res) {

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId)

    if ( email && email !== user.email) {
      const userExist = await User.findOne({
        where: {email: req.body.email }
      })

      if (userExist) {
        return res.status(400).json({
          error: 'Email já está cadastrado'
        })
      }
    }

    if(oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({
        message: 'Senha não compatível'
      })
    }
    
    const { id, name, cellphone } = await user.update(req.body)
    
    return res.json({
      id,
      name,
      cellphone
    })
  }
};
