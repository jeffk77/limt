module.exports = function (sequelize, DataTypes) {
    var FAQ = sequelize.define("FAQ", {
        item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return FAQ;
};
