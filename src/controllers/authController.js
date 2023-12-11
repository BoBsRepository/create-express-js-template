const catchError = require('../utils/catchError')

const register = catchError(async (req, res) => {
    res.json('working')
})

module.exports = { register }
