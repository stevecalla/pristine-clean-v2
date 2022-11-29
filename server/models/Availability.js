const { Schema, model } = require('mongoose');
// TODO: Each day of the week should be an array of Locations
const availabilitySchema = new Schema({
    // user: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User',
    //     },
    // ],
    mondayAm: {
        type: Boolean,
    },
    mondayPm: {
        type: Boolean,
    },
    tuesdayAm: {
        type: Boolean,
    },
    tuesdayPm: {
        type: Boolean,
    },
    wednesdayAm: {
        type: Boolean,
    },
    wednesdayPm: {
        type: Boolean,
    },
    thursdayAm: {
        type: Boolean,
    },
    thursdayPm: {
        type: Boolean,
    },
    fridayAm: {
        type: Boolean,
    },
    fridayPm: {
        type: Boolean,
    },
    saturdayAm: {
        type: Boolean,
    },
    saturdayPm: {
        type: Boolean,
    },
    sundayAm: {
        type: Boolean,
    },
    sundayPm: {
        type: Boolean,
    },
});
// const Availability = model('Availability', availabilitySchema);
module.exports = availabilitySchema;