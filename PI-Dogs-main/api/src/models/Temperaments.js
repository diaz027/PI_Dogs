const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    'Temperaments',
    {
      id: {
        type: DataTypes.UUID,// id = uuid (universal unique identifier), esto se usa para bd
        defaultValue: DataTypes.UUIDV4, // el uuidv4 es para cuando no se leda un valor, por default se asigna un valor en la bd
        primaryKey: true 
      },
      name: {
        type: DataTypes.STRING,
      }
    },
    { timestamps: false }
  );
};