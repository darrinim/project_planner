const Sequelize = require('sequelize');

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/ruksak_db'),
  {
  database: 'ruksak_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

class Gear extends Sequelize.Model {}
Gear.init({
  gear: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'gear',
});

class Location extends Sequelize.Model {}
Location.init({
  location: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'location',
});

class Trip extends Sequelize.Model {}
Trip.init({
  trip: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'trip',
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

Trip.belongsToMany(User, { through: 'user_trip' });
User.belongsToMany(Trip, { through: 'user_trip' });

Gear.belongsToMany(Trip, { through: 'trip_gear' });
Trip.belongsToMany(Gear, { through: 'trip_gear' });

Gear.belongsTo(User, { through: 'user_gear' });
User.belongsToMany(Gear, { through: 'user_gear' });

Location.hasMany(Trip);
Trip.belongsTo(Location);

module.exports = {
  db,
  Gear,
  Location,
  Trip,
  User,
};
