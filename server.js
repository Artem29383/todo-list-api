import express from "express";
import cors from 'cors';

const app = express()

app.use(cors())

const port = process.env.PORT || 4333;

const items = [{id: 1, checked: false, text: 'Buy beer'}, {id: 2, checked: false, text: 'Buy milk'}];

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.get('/list', (req, res) => {
    try {
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
})

app.listen(port, () => {
    console.log(`Express server started at <http://localhost:${port}>`)
});