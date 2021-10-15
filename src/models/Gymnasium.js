const { Model } = require("sequelize");
const Sequelize = require("sequelize")

class Gymnasium extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.STRING,
        image: Sequelize.STRING,
      },
      { sequelize,
        tableName: 'gymnasium', }
    );
  }

  static associate(models) {
    this.belongsTo( models.Company, { foreignKey: 'company_id'})
  }
}

module.exports = Gymnasium;