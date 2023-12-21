import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization || req.headers.authorization;

    if (token) {
      const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
      if (decoded) {
        console.log({ decoded });
        req.userRole = decoded._doc.role;
        return next();
      } else {
        return res.status(403).json({
          message: "Invalid token to verify access",
        });
      }
    } else {
      return res.status(401).json({
        message: "you are not allowed to access this.login first",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};

export default auth;
