var express = require("express")
var bodyParser = require("body-parser")
var db = require('./queries')

var app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', function(req, res){
	res.send('home')
})

app.get('/users', db.getUsers)


app.listen(process.env.PORT, () => {
  console.log(`App running on port 3000.`)
})
