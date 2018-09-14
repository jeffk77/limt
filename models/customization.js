module.exports = function (sequelize, DataTypes) {
    var Customization = sequelize.define("Customization", {
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        special_addition: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        price_addition: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            len: [1]
        }
    });

    return Customization;
};