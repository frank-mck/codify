const User = require('../User');
const TestDatabase = require('../../TestDatabase')
const bcrypt = require('bcryptjs');
require('dotenv').config();

describe('User', () => {

  beforeAll(async () => {
    await TestDatabase.connect();
  })

  afterAll(async () => {
    await TestDatabase.disconnect();
  });

  test('Create user', async () => {
    const user = await User.create({username: 'frank-mck', email: 'frank-mck@frank-mck.com', password: 'test123'});
    await user.save();
    const findUser = await User.findById({ _id: user._id })
    expect(findUser.username).toBe('frank-mck')
  });

  test('Get signed token for user', async () => {
    const user = await User.create({username: 'frank', email: 'frank@frank.com', password: 'test123'});
    await user.save();
    const token = user.getSignedToken();
    expect(token).toBeTruthy();
  });

  test('Validate user if passwords match on sign in', async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('test123', salt)
    const newUser = await User.create({username: 'frank2', email: 'frank2@frank2.com', password: hashedPassword });
    await newUser.save();
    const user = await User.findOne({ username: newUser.username }).select("+password");
    const userAuth = await user.matchPasswords('test123');
    Promise.all([user, salt, hashedPassword, userAuth]);
    expect(userAuth).toBe(true);
  });

  test('invalidate user if password dosent match when user signs in', async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('test123', salt)
    const newUser = await User.create({username: 'frank3', email: 'frank3@frank3.com', password: hashedPassword });
    await newUser.save();
    const user = await User.findOne({ username: newUser.username }).select("+password");
    const userAuth = await user.matchPasswords('incorrect-password');
    Promise.all([user, salt, hashedPassword, userAuth]);
    expect(userAuth).toBe(false);
  })
})
