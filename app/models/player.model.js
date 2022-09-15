module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    playerName: {
      type: DataTypes.STRING,
    },
    playerType: {
      type: DataTypes.STRING,
    },
  });

  return Player;
};
