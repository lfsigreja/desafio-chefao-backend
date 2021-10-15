const Company = require('../models/Company')

module.exports = {
  async store(req, res) {
    const { name, email, address, password, cellphone } = req.body;

    const companyData = await Company.create({
      name, email, address, password, cellphone
    });

    return res.json(companyData);
  }
}