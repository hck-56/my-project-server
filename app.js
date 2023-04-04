const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/cart', function (req, res) {
    // ................
    res.send('Cart')
})

app.listen(3000, function () {
    console.log('Listening on port', 3000)
})
