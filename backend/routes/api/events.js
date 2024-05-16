// eventsRouter.js
const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/events");
const { authenticate } = require("../../middlewares");
const {findParticipantByEmailForEvent, findParticipantByFullNameForEvent} = require("../../controllers/events");

router.get("/", ctrl.getAllEvents);
router.get("/:id", ctrl.getEventById);
router.post("/",authenticate, ctrl.createEvent);
router.patch("/:id", ctrl.updateEventById);
router.delete("/:id", ctrl.deleteEventById);
router.post("/:id/register", ctrl.registerForEvent);
router.get('/:eventId/participants/email', findParticipantByEmailForEvent);
router.get('/:eventId/participants/fullname', findParticipantByFullNameForEvent);


module.exports = router;
