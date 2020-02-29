'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    class_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    place: DataTypes.STRING
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};