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

db.groupATeam = require("./groupATeam.model.js")(sequelize, Sequelize);
db.groupBTeam = require("./groupBTeam.model.js")(sequelize, Sequelize);

db.groupBTeam.belongsToMany(db.groupATeam, {
  through: "groupATeam_groupBTeam",
  as: "groupATeams",
  foreignKey: "groupBTeam_id",
});
db.groupATeam.belongsToMany(db.groupBTeam, {
  through: "groupATeam_groupBTeam",
  as: "groupBTeams",
  foreignKey: "groupATeam_id",
});

module.exports = db;