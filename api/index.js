import { configDotenv } from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import path from 'path';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);
app.use('/api', (req, res) => res.status(404).json({ error: 'API route not found' }));

// ถ้าไม่เจอ route ไหนเลย ให้ส่ง 404.html
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(process.cwd(), 'public', '404.html'));
});

// Start Server
app.listen(port, () => console.log(`Server ready on port ${port}.`));

export default app;
