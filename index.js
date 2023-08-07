const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
require('dotenv').config();

app.use(express.json());
app.use(cors())

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000')); 