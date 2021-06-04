const kill = require('kill-port')

const http = require('http')
const port = 3000

const app = require('./app')

var morgan = require('morgan')

app.set('port', process.env.PORT || 3000)


const server = http.createServer(app)

morgan('tiny')




server.listen(process.env.PORT || 3000)