const Sequelize = require('sequelize');

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/project_planner'),
  {
  database: 'project_planner',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

class Project extends Sequelize.Model {}
Project.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  mvp: Sequelize.TEXT,
  postmvp: Sequelize.TEXT,
  status: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'project',
});

class Timeline extends Sequelize.Model {}
Timeline.init({
  description: Sequelize.TEXT,
  priority: Sequelize.STRING,
  estimated_time: Sequelize.INTEGER,
  time_invested: Sequelize.INTEGER,
  order: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'timeline',
});

class User extends Sequelize.Model {}
User.init({
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'user',
});

// class Itin extends Sequelize.Model {}
// Itin.init({
//   days: Sequelize.INTEGER
// })
// email: {
//   type: Sequelize.STRING,
//   unique: true,
//   allowNull: false,
//   validate: {
//     isEmail: true,
//   },
// },
// username: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },
// password_digest: Sequelize.STRING,
// }, {

User.hasMany(Project)
Project.hasMany(Timeline)


module.exports = {
  db,
  User,
  Timeline,
  Project
};
