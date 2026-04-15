import Contact from "../models/contact.model.js";

export const contactconcept = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are mandatory",
      });
    }

    // ✅ check if user already exists (just for info)
    const existingUser = await Contact.findOne({ email });

    // ✅ ALWAYS create new message
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: existingUser
        ? "Message sent again (existing user)"
        : "Message sent successfully (new user)",
      data: newContact,
    });

  } catch (error) {
    console.error("Contact route error:", error);
    res.status(500).json({
      success: false,
      error: "Server error. Please try again later.",
    });
  }
};