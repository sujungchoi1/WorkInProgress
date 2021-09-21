const express = require("express");
const db = require('./server/db/connection');
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require("./server/routes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '.../build')))
// }

// middleware - affects incoming requests
//use cors for all the incoming requests
app.use(cors());
app.use(bodyParser.json());
//configure express to use json data
app.use(express.json());
//helps us read POST data and encode it into json data if we get it over the url
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
// const router = require('./server/routes/routes');
// router(app);


app.listen(PORT, () => console.log(`You are on port ${PORT}`));