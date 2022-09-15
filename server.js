const db = require("./app/models");
const GroupATeamsController = require("./app/controllers/groupATeam.controller");
const GroupBTeamsController = require("./app/controllers/groupBTeam.controller");

const run = async () => {
  // Create GroupATeamss
  const team1 = await GroupATeamsController.create({
    teamName: "Data Daredevils",
    teamGroup: "Group A teamGroup",
  });

  const team2 = await GroupATeamsController.create({
    teamName: "Data Daredevils",
    teamGroup: "Group A teamGroup",
  });

  const team3 = await GroupATeamsController.create({
    teamName: "Python Predators",
    teamGroup: "Group A teamGroup",
  });

  const team4 = await GroupATeamsController.create({
    teamName: "Java Riders",
    teamGroup: "Group A teamGroup",
  });

  // Create GroupBTeams
  const team5 = await GroupBTeamsController.create({
    name: "Product Panthers",
    teamGroupB: "Group B"
  });

  const team6 = await GroupBTeamsController.create({
    name: "UI Unicorns",
    teamGroupB: "Group B"
  });

  // Add GroupATeams to Tags
  await GroupBTeamsController.addGroupATeams(team5.id, team1.id);
  // >> added GroupATeams id=1 to Tag id=1
  await GroupBTeamsController.addGroupATeams(team5.id, team2.id);
  // >> added GroupATeams id=2 to Tag id=1
  await GroupBTeamsController.addGroupATeams(team5.id, team3.id);
  // >> added GroupATeams id=3 to Tag id=1
  await GroupBTeamsController.addGroupATeams(team6.id, team3.id);
  // >> added GroupATeams id=3 to Tag id=2
  await GroupBTeamsController.addGroupATeams(team6.id, team4.id);
  // >> added GroupATeams id=4 to Tag id=2
  await GroupBTeamsController.addGroupATeams(team6.id, team1.id);
  // >> added GroupATeams id=1 to Tag id=2

  // Show Tag (including GroupATeamss) by id
  // const _team5 = await GroupBTeamsController.findById(team5.id);
  // console.log(">> team5", JSON.stringify(_team5, null, 2));

  // Show all Tags
  // const tags = await GroupBTeamsController.findAll();
  // console.log(">> tags", JSON.stringify(tags, null, 2));

  // Show GroupATeams (including Tags) by id
  const _tut = await GroupATeamsController.findById(team3.id);
  console.log(">> team3", JSON.stringify(_tut, null, 2));

  // Show all GroupATeamss
  // const tuts = await GroupATeamsController.findAll();
  // console.log(">> tuts", JSON.stringify(tuts, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
