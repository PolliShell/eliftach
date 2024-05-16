// eventRegistration.js
const { Schema, model } = require("mongoose");
const Joi = require("joi");

const eventRegistration = new Schema({
    event_id: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    referral_source: {
        type: String,
        maxlength: 255
    }
}, { versionKey: false, timestamps: true });

const eventRegistrationSchemaValidator = Joi.object({
    event_id: Joi.string().required(),
    user_id: Joi.string().required(),
    referral_source: Joi.string().max(255)
});

module.exports = {
    EventRegistration: model("EventRegistration", eventRegistration),
    eventRegistrationSchemaValidator
};
