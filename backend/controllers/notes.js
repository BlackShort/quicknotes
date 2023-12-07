import { Notes } from "../models/notes.js";
import ErrorHandler from "../middlewares/error.js";

export const newNote = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Notes.create({
            title,
            description,
            user: req.user,
        })

        res.status(201).json({
            success: true,
            message: "Note Added Successfully"
        });
    } catch (error) {
        next(error);
    }
}

export const getNotes = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const notes = await Notes.find({ user: userid });
        res.status(200).json({
            success: true,
            notes,
            message: "Fetched Successfull",
        });
    } catch (error) {
        next(error);
    }
}

export const getOneNote = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.id);
        res.status(200).json({
            success: true,
            note,
        });
    } catch (error) {
        next(error);
    }
}


export const updateNotes = async (req, res, next) => {
    try {
        const notes = await Notes.findById(req.params.id);
        if (!notes) return next(new ErrorHandler("Note not found", 404));

        const { title, description } = req.body;
        notes.title = title;
        notes.description = description;
        await notes.save();

        res.status(200).json({
            success: true,
            message: "Note Updated",
        });
    } catch (error) {
        next(error);
    }
}

export const deleteNotes = async (req, res, next) => {
    try {
        const notes = await Notes.findById(req.params.id);
        if (!notes) next(new ErrorHandler("Task not found", 404));
        await notes.deleteOne();
        res.status(200).json({
            success: true,
            message: "Note Dleted",
        });
    } catch (error) {
        next(error);
    }
}