import express from "express";
import { contactconcept } from "../controllers/contact.controller.js";
import Contact from "../models/contact.model.js";

const contactRouter = express.Router();

// ✅ POST (save message)
contactRouter.post("/", contactconcept);

// ✅ GET (fetch all messages)
contactRouter.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch messages",
    });
  }
});

// ✅ DELETE (remove a message)
contactRouter.delete("/:id", async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Message deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to delete message" });
  }
});

export default contactRouter;