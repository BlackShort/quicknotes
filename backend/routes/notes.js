import express from "express";
import { newNote, getNotes, getOneNote, updateNotes, deleteNotes } from "../controllers/notes.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newNote);
router.get("/all", isAuthenticated, getNotes);
router
    .route("/:id")
    .get(isAuthenticated, getOneNote)
    .put(isAuthenticated, updateNotes)
    .delete(isAuthenticated, deleteNotes);

export default router;