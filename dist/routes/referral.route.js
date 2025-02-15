"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const router = express_1.default.Router();
router.post("/send", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, company } = req.body;
    if (!name || !email || !company) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    // Configure Nodemailer
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email app password
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "recipient@example.com", // Change this to where you want to receive the referrals
        subject: "New Referral Submission",
        text: `You have a new referral:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}`,
    };
    try {
        yield transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Referral email sent successfully!" });
    }
    catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
}));
exports.default = router;
