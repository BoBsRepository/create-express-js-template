const express = require('express')
const morgan = require('morgan')
const cookie = require('cookie-parser');
const CheckError = require('./utils/checkError')
const { config } = require('./configs/config')
const authRouter = require('./routes/authRoutes')
const app = express()

app.use(express.json());
app.use(cookie());

if (config.MODE == 'DEV') {
    app.use(morgan('dev'))
}

require('./database/connectDB')
app.use('/api/auth', authRouter)

app.all('*', (req, res) => {
    const error = new CheckError(
        `Can't find ${req.originalUrl} on this server!`,
        404
    )
    res.status(error.statusCode).json({
        success: false,
        error: error.message,
    })
})

app.listen(config.PORT, () => {
    console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`)
})
