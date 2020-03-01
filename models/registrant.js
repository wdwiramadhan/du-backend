"use strict";
module.exports = (sequelize, DataTypes) => {
  const Registrant = sequelize.define(
    "Registrant",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      socmed: DataTypes.STRING,
      class_id: DataTypes.INTEGER
    },
    {}
  );
  Registrant.associate = function(models) {
    Registrant.belongsTo(models.Class, { foreignKey: "class_id", as: "class" });
  };
  return Registrant;
};
