const mongoose = require("mongoose");
require('dotenv').config();

const connect = () => {mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Database tá rodando!'))
    .catch(err => console.err)
};


module.exports = { connect };