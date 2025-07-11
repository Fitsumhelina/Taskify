import express from 'express';
const app = express();
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');

app.use(express.json());
app.use('/', userRoute);
app.use('/tasks', taskRoute);

app.get('/', (req, res) => {
    const readmePath = path.resolve(process.cwd(), '../README.md');
    fs.readFile(readmePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading README.md');
        }
        const htmlContent = marked(data);
        res.send(`
            <html>
                <head>
                    <title>Taskify README</title>
                    <meta charset="UTF-8" />
                </head>
                <body style="font-family: sans-serif; padding: 2rem;">
                    ${htmlContent}
                </body>
            </html>
        `);
    });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
