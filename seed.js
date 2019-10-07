const { User, Project, Timeline } = require('./model');
const users = require('./users.json')
const projects = require('./projects.json')
const timeline = require('./timeline.json')

const seed = async () => {
  try {
    // await User.bulkCreate(users)
    await Project.bulkCreate(projects)
    await Timeline.bulkCreate(timeline)
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message);
  } finally {
    process.exit();
  }
};


seed();
