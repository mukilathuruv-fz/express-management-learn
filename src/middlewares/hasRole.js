// import roles from "../../constants/roles.js";

const hasRole = (...rolesAllowed) => {
  console.log({
    rolesAllowed,
  });
  return async (req, res, next) => {
    const userRole = req.userRole;
    const isAllowed = rolesAllowed.includes(userRole);
    console.log({
      userRole,
      isAllowed,
    });
    if (isAllowed) {
      next();
    } else {
      return res.status(401).json({
        message: "Invalid Role to Access the resource",
      });
    }
  };
};
export default hasRole;
