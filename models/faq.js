module.exports = function(sequelize, DataTypes) {
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

  FAQ.associate = function(models) {
    FAQ.belongsTo(models.Products, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return FAQ;
};
