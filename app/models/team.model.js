module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("team", {
    teamName: {
      type: DataTypes.STRING,
    },
    teamGroup: {
      type: DataTypes.STRING,
    },
  });

  return Team;
};
