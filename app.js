const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req,res)=>{
    res.render('index')
})

app.use((req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})