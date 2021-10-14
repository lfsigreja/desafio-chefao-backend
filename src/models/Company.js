const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require ('bcryptjs');

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        password_hash: Sequelize.VIRTUAL,
        password: Sequelize.STRING,
        cellphone: Sequelize.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Gymnasium, { foreignKey: 'company_id', as: 'gymnasium' });
    this.hasMany( models.Structure, { foreignKey: 'company_id', as: 'structure'} )
  }

  checkPassword(password_hash) {
    return bcrypt.compare( password_hash, this.password)
  }
}

module.exports = Company;