import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2811

app.use(cors({credentials: true, origin: "http://localhost:5173"}));
app.use(express.json()); // allow us to parse incoming requests:req.body
app.use(cookieParser()); // allow us to parse incoming cookies

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("Hi from Server");
// });

app.listen(PORT, () => {
    console.log(`App is listening in PORT ${PORT}`);
    connectDB();
});

// VSCode Great Icons