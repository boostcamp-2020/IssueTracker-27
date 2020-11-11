const AuthService = require('../services/auth');

const AuthController = {
  checkLoginSuccess: async (req, res) => {
    if (req.user) {
      const userInfo = await AuthService.checkLoginSuccess(req.user.id);
      return res.status(200).json({
        message: '로그인 성공',
        user: userInfo,
      });
    }
    return res.status(400).json({
      message: '로그인 실패',
    });
  },
  logout: (req, res) => {
    req.logout();
    req.clearCookie('connect.sid');
    res.status(200).json({ message: '로그아웃 되었습니다.' });
  },
};

module.exports = AuthController;
