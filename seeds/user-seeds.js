const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'anais',
    email: 'anais@abcd.corn',
    password: 'password123'
  },
  {
    username: 'stephen',
    email: 'stephen@abcd.corn',
    password: 'password123'
  },
  {
    username: 'jeremy',
    email: 'jeremy@abcd.corn',
    password: 'password123'
  },
  {
    username: 'nikita',
    email: 'nikita@abcd.corn',
    password: 'password123'
  },
  {
    username: 'desiree',
    email: 'desiree@abcd.corn',
    password: 'password123'
  },
  {
    username: 'rasputin',
    email: 'rasputin@abcd.efg',
    password: 'password123'
  },
  {
    username: 'eloy',
    email: 'eloy@abcd.corn',
    password: 'password123'
  },
  {
    username: 'jessica',
    email: 'jessicajessica@um.edu',
    password: 'password123'
  },
  {
    username: 'arthur',
    email: 'arthurtheman@peacock.ru',
    password: 'password123'
  },
  {
    username: 'jamie',
    email: 'jamie@abcd.orgd',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
