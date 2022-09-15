const db = require("../models");
// const Tutorial = db.tutorial;
const GroupATeams = db.groupATeam;
const GroupBTeams = db.groupBTeam;

// Create and Save new groupBTeam
exports.create = (groupBTeam) => {
  return GroupBTeams.create({
    teamNameB: groupBTeam.teamNameB,
  })
    .then((groupBTeam) => {
      console.log(">> Created GroupBTeams: " + JSON.stringify(groupBTeam, null, 2));
      return groupBTeam;
    })
    .catch((err) => {
      console.log(">> Error while creating GroupBTeams: ", err);
    });
};
// Find all GroupBTeamss
exports.findAll = () => {
  return GroupBTeams.findAll({
    include: [
      {
        model: GroupATeams,
        as: "groupATeams",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((groupBTeams) => {
      return groupBTeams;
    })
    .catch((err) => {
      console.log(">> Error while retrieving GroupBTeamss: ", err);
    });
};

// Find a GroupBTeams for a given GroupBTeams id
exports.findById = (id) => {
  return GroupBTeams.findByPk(id, {
    include: [
      {
        model: GroupATeams,
        as: "groupATeams",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((groupBTeam) => {
      return groupBTeam;
    })
    .catch((err) => {
      console.log(">> Error while finding GroupBTeams: ", err);
    });
};

// Add a GroupATeams to a GroupBTeams
exports.addGroupATeams = (groupBTeamId, groupATeamId) => {
  return GroupBTeams.findByPk(groupBTeamId)
    .then((groupBTeam) => {
      if (!groupBTeam) {
        console.log("GroupBTeams not found!");
        return null;
      }
      return GroupATeams.findByPk(groupATeamId).then((groupATeam) => {
        if (!groupATeam) {
          console.log("GroupATeams not found!");
          return null;
        }

        groupBTeam.addGroupATeams(groupATeam);
        console.log(`>> added groupATeam id=${groupATeam.id} to GroupBTeams id=${groupBTeam.id}`);
        return groupBTeam;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding groupATeam to GroupBTeams: ", err);
    });
};
