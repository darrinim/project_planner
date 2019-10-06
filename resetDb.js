const { db } = require('./model');

const resetDb = async () => {
  try {
    await db.sync({ force: true });
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.message);
  } finally {
    process.exit();
  }
};

resetDb();
