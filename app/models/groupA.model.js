module.exports = (sequelize, DataTypes) => {
  const Group_A_Team = sequelize.define("group_A_team", {
    teamName: {
      type: DataTypes.STRING
    },
    teamGroup: {
      type: DataTypes.STRING
    },
     
  });

  return Group_A_Team;
};
