const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require('../config/db');

exports.signup = async (req, res) => {
  try {
    console.log('Nouvelle inscription :', req.body);
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email} });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Utilisateur incorrect" });
    }
    console.log(user)
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(401)
        .json({ message: "mot de passe incorrect" });
    }
    
    console.log(user.id_user);
    const token = jwt.sign({ id_user: user.id_user }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "24h",
    });
    console.log(token);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


