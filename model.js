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
  postMvp: Sequelize.TEXT,
  status: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER
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
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'user',
});



User.hasMany(Project)
Project.belongsTo(User)


module.exports = {
  db,
  User,
  Timeline,
  Project
};
