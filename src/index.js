const express = require('express');
const { config } = require('./configs/config')
const authRouter = require('./routes/authRoutes')
const app = express();


app.use(express.json());

require('./database/connectDB');
app.use("/api/auth",authRouter);



app.listen(config.PORT,()=>{
    console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`)
});