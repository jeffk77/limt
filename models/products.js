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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    photo_Id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Timbits"
    }
  });

  Products.associate = function(models) {
    Products.hasMany(models.FAQ, {
      onDelete: "cascade"
    });
  };

  return Products;
};
