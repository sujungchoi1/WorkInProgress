const { Router } = require("express");
const projectsRouter = require("./projects");
// const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("Displaying from the API route 👍"));

// router.use("/", usersRouter);
router.use("/projects", projectsRouter);

module.exports = router;
