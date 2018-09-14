module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    base_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    photo_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Timbits"
    }
  });

  item.associate = function(models) {
    item.belongsTo(models.products, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Products;
};
