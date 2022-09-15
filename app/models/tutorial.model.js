module.exports = (sequelize, DataTypes) => {
    const GroupATeams = sequelize.define("groupATeam", {
      teamName: {
        type: DataTypes.STRING,
      },
      teamGroup: {
        type: DataTypes.STRING,
      },
    });
  
    return GroupATeams;
  };