const db = require("./app/models");
const GroupAController = require("./app/controllers/gruopA.controller");
const GroupBController = require("./app/controllers/groupB.controller");

const run = async () => {
  // Create Group_A_Teams
  const tut1 = await GroupAController.create({
    teamName: " Data Daredevils",
    teamGroup: "A teamGroup",
  });

  const tut2 = await GroupAController.create({
    teamName: "Design Dazzlers",
    teamGroup: "A TeamGroup",
  });

  const tut3 = await GroupAController.create({
    teamName: "Python Predators",
    teamGroup: "A teamGroup",
  });

  const tut4 = await GroupAController.create({
    teamName: "Java Riders",
    teamGroup: "A teamGroup",
  });

  // Create Group_B_Teams
  const tag1 = await GroupBController.create({
    name: "Product Panthers",
    teamGroupB: "B teamGroup",
  });

  const tag2 = await GroupBController.create({
    name: "Enabling Eternals",
    teamGroupB: "B teamGroup",
  });
console.log("************Add Group_A_Teams to Tags***********")
  // Add Group_A_Teams to Tags
  await GroupBController.addGroup_A_Team(tag1.id, tut1.id);
  // >> added Group_A_Team id=1 to Tag id=1

  await GroupBController.addGroup_A_Team(tag1.id, tut2.id);
  // >> added Group_A_Team id=2 to Tag id=1

  await GroupBController.addGroup_A_Team(tag1.id, tut3.id);
  // >> added Group_A_Team id=3 to Tag id=1

  await GroupBController.addGroup_A_Team(tag2.id, tut3.id);
  // >> added Group_A_Team id=3 to Tag id=2

  await GroupBController.addGroup_A_Team(tag2.id, tut4.id);
  // >> added Group_A_Team id=4 to Tag id=2

  await GroupBController.addGroup_A_Team(tag2.id, tut1.id);
  // >> added Group_A_Team id=1 to Tag id=2

  // Show Group_B_Teams (including Group_A_Teams) by id
  const _tag1 = await GroupBController.findById(tag1.id);
  console.log(">> tag1", JSON.stringify(_tag1, null, 2));

  // Show all Group_B_Teams
  // const group_B_teams = await GroupBController.findAll();
  // console.log(">> tags", JSON.stringify(group_B_teams, null, 2));
  const tags = await GroupBController.findAll();
  console.log(">> tags", JSON.stringify(tags, null, 2));

  // Show Group_A_Team (including Tags) by id
  const _tut = await GroupAController.findById(tut3.id);
  console.log(">> tut3", JSON.stringify(_tut, null, 2));

  // Show all Group_A_Teams
  const tuts = await GroupAController.findAll();
  console.log(">> tuts", JSON.stringify(tuts, null, 2));
};

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
