const db = require("./app/models");
// const db = require('./app/models/index.js')
const controller = require("./app/controllers/team.controller");

const run = async () => {
  const team1A = await controller.createTeam({
    teamName: "Python Predators",
    teamGroup: "A teamGroup",
  });

  const team2A = await controller.createTeam({
    teamName: "Java Riders",
    teamGroup: "A teamGroup",
  });
  const team1B = await controller.createTeam({
    teamName: "Design Dazzlers",
    teamGroup: "B teamGroup",
  });

  const team2B = await controller.createTeam({
    teamName: "Data Daredevils",
    teamGroup: "B teamGroup",
  });

  const player1 = await controller.createPlayer(team1A.id, {
    playerName: "bezkoder",
    playerType: "All-rounder",
  });

  await controller.createPlayer(team1A.id, {
    playerName: "zkoder",
    playerType: "All-rounder",
  });

  const player2 = await controller.createPlayer(team2A.id, {
    playerName: "aKoder",
    playerType: "All-rounder",
  });

  await controller.createPlayer(team2A.id, {
    playerName: "anotherKoder",
    playerType: "All-rounder",
  });

  const team1AData = await controller.findteamById(team1A.id);
  console.log(
    ">> team id=" + team1AData.id,
    JSON.stringify(team1AData, null, 2)
  );

  const team2AData = await controller.findteamById(team2A.id);
  console.log(
    ">> team id=" + team2AData.id,
    JSON.stringify(team2AData, null, 2)
  );

  const player1Data = await controller.findPlayerById(player1.id);
  console.log(
    ">> Player id=" + player1.id,
    JSON.stringify(player1Data, null, 2)
  );

  const player2Data = await controller.findPlayerById(player2.id);
  console.log(
    ">> Player id=" + player2.id,
    JSON.stringify(player2Data, null, 2)
  );

  const teams = await controller.findAll();
  console.log(">> All teams", JSON.stringify(teams, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
