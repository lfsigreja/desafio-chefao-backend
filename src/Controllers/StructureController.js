const Structure = require('../models/Structure')

module.exports = {
  async store(req, res) {
    const { company_id, item } = req.body;

    const structureData = await Structure.create({
      item,
      company_id
    });

    return res.json(structureData);
  }
}