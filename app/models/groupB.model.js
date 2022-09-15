module.exports = (sequelize, DataTypes) => {
  const Group_B_Team = sequelize.define("group_B_team", {
    name: {
      type: DataTypes.STRING,
    },
    teamGroupB: {
      type: DataTypes.STRING,
    },
  });

  return Group_B_Team;
};
