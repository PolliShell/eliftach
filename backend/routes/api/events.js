// eventsRouter.js
const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/events");
const { authenticate } = require("../../middlewares");

router.get("/", ctrl.getAllEvents);
router.get("/:id", ctrl.getEventById);
router.post("/",authenticate, ctrl.createEvent);
router.patch("/:id", ctrl.updateEventById);
router.delete("/:id", ctrl.deleteEventById);
router.post("/:id/register", ctrl.registerForEvent);

module.exports = router;
