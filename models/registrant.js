module.exports = (sequelize, DataTypes) => {
  const Registrant = sequelize.define(
    "Registrant",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue:  DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      socmed: DataTypes.STRING,
      class_id: DataTypes.INTEGER
    },
    {
      sequelize,
      paranoid: true
    }
  );
  Registrant.associate = function(models) {
    Registrant.belongsTo(models.Class, { foreignKey: "class_id", as: "class" });
  };
  return Registrant;
};
