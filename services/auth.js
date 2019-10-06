const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT = 11;
const TOKEN_KEY = 'adventuretime';

const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALT);
};

const checkPassword = async (password, hashed_password) => {
  return await bcrypt.compare(password, hashed_password);
};

const genToken = (data) => {
  const token = jwt.sign(data, TOKEN_KEY);
  return token;
};

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const data = jwt.verify(token, TOKEN_KEY);
    res.locals.user = data;
    next();
  } catch (e) {
    console.log(e.message);
    res.status(403).send('Unauthorized');
  };
};


module.exports = {
  checkPassword,
  genToken,
  hashPassword,
  restrict,
};
