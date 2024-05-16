// events.js
const { Event } = require("../models/event");
const { EventRegistration } = require("../models/eventRegistration");
const { HttpError } = require("../helpers");

const getAllEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
};

const getEventById = async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) {
        throw HttpError(404, "Event not found");
    }

    res.json(event);
};

// events.js
const createEvent = async (req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            throw HttpError(401, "User not authenticated");
        }

        const { title, description, event_date } = req.body;
        const organizer_id = req.user._id;

        const newEvent = await Event.create({ title, description, event_date, organizer_id });

        res.status(201).json(newEvent);
    } catch (error) {
        next(error);
    }
};

const updateEventById = async (req, res) => {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEvent) {
        throw HttpError(404, "Event not found");
    }

    res.json(updatedEvent);
};

const deleteEventById = async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
        throw HttpError(404, "Event not found");
    }

    res.json({ message: "Event deleted successfully" });
};

const registerForEvent = async (req, res) => {
    const { event_id, user_id, referral_source } = req.body;
    const registration = await EventRegistration.create({ event_id, user_id, referral_source });

    res.status(201).json(registration);
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEventById,
    deleteEventById,
    registerForEvent
};
