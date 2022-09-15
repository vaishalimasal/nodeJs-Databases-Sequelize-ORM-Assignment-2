const db = require("../models");
const Team = db.teams;
const Player = db.players;

// Create and Save new teams
exports.createTeam = (team) => {
  return Team.create({
      teamName: team.teamName,
      teamGroup: team.teamGroup,
    })
    .then((team) => {
      console.log(">> Created team: " + JSON.stringify(team, null, 4));
      return team;
    })
    .catch((err) => {
      console.log(">> Error while creating team: ", err);
    });
};

// Create and Save new players
exports.createPlayer = (teamId, player) => {
  return Player.create({
    playerName: player.playerName,
    playerType: player.playerType,
    teamId: teamId,
  })
    .then((player) => {
      console.log(">> Created Player: " + JSON.stringify(player, null, 4));
      return player;
    })
    .catch((err) => {
      console.log(">> Error while creating Player: ", err);
    });
};

// Get the players for a given team
exports.findteamById = (teamId) => {
  return Team.findByPk(teamId, { include: ["players"] })
    .then((team) => {
      return team;
    })
    .catch((err) => {
      console.log(">> Error while finding team: ", err);
    });
};

// Get the players for a given Player id
exports.findPlayerById = (id) => {
  return Player.findByPk(id, { include: ["team"] })
    .then((player) => {
      return player;
    })
    .catch((err) => {
      console.log(">> Error while finding Player: ", err);
    });
};

// Get all teams include players
exports.findAll = () => {
  return Team.findAll({
      include: ["players"],
    })
    .then((teams) => {
      return teams;
    });
};
