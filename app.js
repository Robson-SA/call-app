const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const port = 4000

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'njk')
app.use(routes)

nunjucks.configure('views',{
    express: app,
    autoescape: false,
    noCache: true
})

app.listen(port, ()=>{
    console.log(`server is running port ${port}`)
})

