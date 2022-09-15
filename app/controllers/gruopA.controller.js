const db = require("../models");
const Group_A_Team = db.group_A_team;
const Group_B_Team = db.group_B_team;

// Create and Save new Group_A_Team

exports.create = (group_A_team) => {
  return Group_A_Team.create({
    teamName: group_A_team.teamName,
    teamGroup: group_A_team.teamGroup,
  })
    .then((group_A_team) => {
      console.log(
        ">> Created Group_A_Team: " + JSON.stringify(group_A_team, null, 4)
      );
      return group_A_team;
    })
    .catch((err) => {
      console.log(">> Error while creating Group_A_Team: ", err);
    });
};

// Retrieve all Group_A_Teams
exports.findAll = () => {
  return Group_A_Team.findAll({
    include: [
      {
        model: Group_B_Team,
        as: "group_B_teams",
        attributes: ["id", "name", "teamGroupB"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((group_A_teams) => {
      return group_A_teams;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Group_A_Teams: ", err);
    });
};

// Get the Group_A_Team for a given group_A_team id
exports.findById = (id) => {
  return Group_A_Team.findByPk(id, {
    include: [
      {
        model: Group_B_Team,
        as: "group_B_teams",
        attributes: ["id", "name", "teamGroupB"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((group_A_team) => {
      return group_A_team;
    })
    .catch((err) => {
      console.log(">> Error while finding Group_A_Team: ", err);
    });
};
