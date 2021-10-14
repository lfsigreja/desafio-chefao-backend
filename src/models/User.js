const { Model } = require("sequelize");
const Sequelize = require("sequelize")
const { username, password } = require("../config/database");
const bcrypt = require ('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cellphone: Sequelize.STRING,
        password_hash: Sequelize.VIRTUAL,
        password: Sequelize.STRING,
        address: Sequelize.STRING,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password_hash) {
        user.password = await bcrypt.hash(user.password_hash, 10)
      }
    })

    return this;
  }

  static associate(models) {
    this.belongsTo( models.File, { foreignKey: 'photo_id'} )
  }

  checkPassword(password_hash) {
    return bcrypt.compare( password_hash, this.password)
  }
}

module.exports = User;
