'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    id: {
      type: DataTypes.UUID,
      defaultValue:  DataTypes.UUIDV4,
      primaryKey: true
    },
    registrant_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    confirm_by: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true
  });
  Bill.associate = function(models) {
    Bill.hasMany(models.Registrant, { foreignKey:'registrant_id', as:'registrant' });
  };
  return Bill;
};