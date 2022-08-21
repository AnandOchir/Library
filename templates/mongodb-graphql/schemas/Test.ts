import mongoose, { Schema } from "mongoose";

const TestSchema = new Schema({
    text: { type: String, maxlength: 50, minlength: 2 },
});

const Test = mongoose.model("Test", TestSchema);

export { Test };
