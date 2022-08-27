const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://quangson1901:plmmlp98@mern-learnit.gp48stt.mongodb.net/mern-learnit?retryWrites=true&w=majority',
        );

        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const POST = process.env.PORT || 5000;

app.listen(POST, () => console.log(`Server started on post ${POST}`));
