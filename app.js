const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))

app.get("/", (req, res) => {
    // res.status(200).json({
    //     Message: "Working fine",
    //     Data: "Great job"
    // })
    res.render("home")
    // may show home.ejs later
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})