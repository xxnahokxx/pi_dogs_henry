const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    });
}
