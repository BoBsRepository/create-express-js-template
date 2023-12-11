const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 5050,
    MONGOURI : process.env.MONGOURI,
    MODE : process.env.MODE,
}


module.exports = { config }