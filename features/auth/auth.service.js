const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const knex = require('../../config/knex'); // Assuming knex is exported from config/knex.js


exports.findUserByEmail = async (email) => {
  const user = await knex('users').where({ email }).first();
  return user;
};

exports.verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
};

exports.createUser = async ({ name, email, password }) => {
  const password_hash = await bcrypt.hash(password, 10);

  const [user] = await knex('users')
    .insert({
      name,
      email,
      password_hash,
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning(['id', 'name', 'email']);

  return user;
};
