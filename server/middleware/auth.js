const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    console.log(decodedToken)
    const userId = decodedToken.user_id;
    console.log("ID de l'utilisateur extrait:", userId);
    req.auth = {
      user_id: userId,
    };
    return next();
  } catch (error) {
    res.status(401).json({ message: "Merci de vous connecter !" });
  }
}

module.exports = isAuthenticated;