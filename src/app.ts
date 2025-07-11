import express from 'express';
const app = express();
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');

app.use(express.json());
app.use('/', userRoute);
app.use('/tasks', taskRoute);
app.get('/', (req, res) => {
    res.send('Welcome to Taskify API');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
