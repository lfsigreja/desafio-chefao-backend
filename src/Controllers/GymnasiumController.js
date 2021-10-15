const Company = require('../models/Company')
const Gymnasium = require('../models/Gymnasium')

module.exports = {
  async index(req, res) {
      const companyData = await Company.findAll({
      attributes: ['id','name','email','address','cellphone'],
      include: [
        { association: 'gymnasium', attributes: ['id', 'price', 'image']},
        { association: 'structure', attributes: ['id','item']}
      ]
    })

    return res.json(companyData)
  },

  async store(req, res) {
    const { company_id, price, image } = req.body;

    const gymnasiumData = await Gymnasium.create({
      company_id,
      price,
      image,
    });

    return res.json(gymnasiumData);
  }
}