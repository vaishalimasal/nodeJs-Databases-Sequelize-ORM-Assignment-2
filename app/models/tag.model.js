module.exports = (sequelize, DataTypes) => {
    const GroupBTeams = sequelize.define("groupBTeam", {
      teamNameB: {
        type: DataTypes.STRING,
      },
      teamGroupB: {
        type: DataTypes.STRING,
      },
    });
  
    return GroupBTeams;
  };