"use strict";
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      class_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      place: DataTypes.STRING
    },
    {}
  );
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Class, { foreignKey: "class_id", as: "class" });
  };
  return Schedule;
};
