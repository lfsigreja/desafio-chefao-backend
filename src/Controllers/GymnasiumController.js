const Company = require('../models/Company')

module.exports = {
  async index(req, res) {
      const companyData = await Company.findAll({
      attributes: ['id','name','email','address','cellphone'],
      include: [
        { association: 'gymnasium', attributes: ['id', 'price']},
        { association: 'structure', attributes: ['id','item']}
      ]
    })

    return res.json(companyData)
  }
}