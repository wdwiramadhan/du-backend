'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    speaker: DataTypes.STRING
  }, {});
  Class.associate = function(models) {
    
  };
  return Class;
};