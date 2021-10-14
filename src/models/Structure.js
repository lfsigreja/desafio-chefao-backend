const { Model, DataTypes } = require('sequelize');

class Structure extends Model {
  static init(sequelize) {
    super.init(
      {
        item: DataTypes.STRING
      },
      {
        sequelize,
        tableName: 'company_structure',
      }
    );
  }

  static associate(models) {
    this.belongsTo( models.Company, { foreignKey: 'company_id'} )
  }
}

module.exports = Structure;