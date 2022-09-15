const db = require("../models");
const Group_A_Team = db.group_A_team;
const Group_B_Team = db.group_B_team;

// Create and Save new Group_B_Team
exports.create = (group_B_team) => {
  return Group_B_Team.create({
    name: group_B_team.name,
    teamGroupB: group_B_team.teamGroupB,
    
  })
    .then((group_B_team) => {
      console.log(">> Created Group_B_Team: " + JSON.stringify(group_B_team, null, 2));
      return group_B_team;
    })
    .catch((err) => {
      console.log(">> Error while creating Group_B_Team: ", err);
    });
};

// Find all Group_B_Teams
exports.findAll = () => {
  return Group_B_Team.findAll({
    include: [
      {
        model: Group_A_Team,
        as: "group_A_teams",
        attributes: ["id", "teamName", "teamGroup"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((group_B_teams) => {
      return group_B_teams;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Group_B_Teams: ", err);
    });
};

// Find a Group_B_Team for a given Group_B_Team id

exports.findById = (id) => {
  return Group_B_Team.findByPk(id, {
    include: [
      {
        model: Group_A_Team,
        as: "group_A_teams",
        attributes: ["id", "teamName", "teamGroup"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((group_B_team) => {
      return group_B_team;
    })
    .catch((err) => {
      console.log(">> Error while finding Group_B_Team: ", err);
    });
};

//Add a Group_A_Team to a Group_B_Team

exports.addGroup_A_Team = (group_B_teamId, group_A_teamId) => {
  return Group_B_Team.findByPk(group_B_teamId)
    .then((group_B_team) => {
      if (!group_B_team) {
        console.log("Group_B_Team not found!");
        return null;
      }
      return Group_A_Team.findByPk(group_A_teamId).then((group_A_team) => {
        if (!group_A_team) {
          console.log("Group_A_Team not found!");
          return null;
        }

        group_B_team.addGroup_A_Team(group_A_team);
        console.log(`>> added Group_A_Team id=${group_A_team.id} to Group_B_Team id=${group_B_team.id}`);
        return group_B_team;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Group_A_Team to Group_B_Team: ", err);
    });
};