'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    speaker: DataTypes.STRING
  }, {});
  Class.associate = function(models) {
    Class.hasMany(models.Schedule, { foreignKey:'class_id' , as: 'schedule' });
  };
  return Class;
};