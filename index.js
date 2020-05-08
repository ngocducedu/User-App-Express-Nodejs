const express = require('express')
const port = 80
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route');

const app = express()
app.set('view engine', 'pug')   
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index', {
        name: "Trang thui^^"
    })
})

app.use('/users', userRoute)

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))