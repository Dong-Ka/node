const { User } = require('../models');

// Lấy danh sách và hiển thị UI
exports.showUsers = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.render('users', { users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm người dùng mới
exports.addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật người dùng
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = req.params.id;

    const updateData = { name, email };
    if (password && password.trim() !== '') {
      updateData.password = password;
    }

    await User.update(updateData, { where: { id: userId } });
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xoá người dùng
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
