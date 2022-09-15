const db = require("../models");
const GroupATeams = db.groupATeam;
// const Tag = db.tag;
const GroupBTeams = db.groupBTeam;


// Create and Save new GroupATeams

exports.create = (groupATeam) => {
  return GroupATeams.create({
    teamName: groupATeam.teamName,
    teamGroup: groupATeam.teamGroup,
  })
    .then((groupATeam) => {
      console.log(">> Created GroupATeams: " + JSON.stringify(groupATeam, null, 4));
      return groupATeam;
    })
    .catch((err) => {
      console.log(">> Error while creating GroupATeams: ", err);
    });
};

// Retrieve all GroupATeamss

exports.findAll = () => {
  return GroupATeams.findAll({
    include: [
      {
        model: GroupBTeams,
        as: "groupBTeams",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["groupBTeam_id", "groupATeam_id"],
        // },
      },
    ],
  })
    .then((groupATeams) => {
      return groupATeams;
    })
    .catch((err) => {
      console.log(">> Error while retrieving GroupATeamss: ", err);
    });
};

// Get the groupATeam for a given groupATeam id

exports.findById = (id) => {
  return GroupATeams.findByPk(id, {
    include: [
      {
        model: GroupBTeams,
        as: "groupBTeams",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["groupBTeam_id", "groupATeam_id"],
        // },
      },
    ],
  })
    .then((groupATeam) => {
      return groupATeam;
    })
    .catch((err) => {
      console.log(">> Error while finding GroupATeams: ", err);
    });
};