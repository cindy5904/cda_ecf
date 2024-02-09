const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    console.log(decodedToken)
    const userId = decodedToken.id_user;
    console.log("ID de l'utilisateur extrait:", userId);
    req.auth = {
      id_user: userId,
    };
    return next();
  } catch (error) {
    res.status(401).json({ message: "Merci de vous connecter !" });
  }
}

module.exports = isAuthenticated;