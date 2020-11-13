const { db } = require('../models/index');
const ISSUETRACKER_ID = 1;

const AuthService = {
  checkLoginSuccess: async (id) => {
    return await db.user.findOne({
      where: { id },
      attributes: ['id', 'username', 'profileImage'],
      include: {
        model: db.joinUser,
        where: { issueTrackerId: ISSUETRACKER_ID },
        attributes: ['id'],
      },
    });
  },
};

module.exports = AuthService;
