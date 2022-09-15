const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.group_A_team = require("./groupA.model.js")(sequelize, Sequelize);
db.group_B_team = require("./groupB.model.js")(sequelize, Sequelize);

db.group_B_team.belongsToMany(db.group_A_team, {
  through: "groupAteam_groupBteam",
  as: "group_A_teams",
  foreignKey: "groupB_id",
});
db.group_A_team.belongsToMany(db.group_B_team, {
  through: "groupAteam_groupBteam",
  as: "group_B_teams",
  foreignKey: "groupA_id",
});

module.exports = db;
