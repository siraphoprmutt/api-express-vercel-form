import express from "express";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/register", upload.single("attachment"), async (req, res) => {
    const { name, email, phone, address, userType } = req.body;
    const file = req.file;
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (file && !allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: "Only PDF or image files are allowed." });
    }

    console.log("body: ", req.body)
    console.log('file: ', file);

    res.status(200).json({
        message: "register success",
        data: {
            ...req.body,
            file: file ? file.originalname : null
        }
    })
})

export default router;