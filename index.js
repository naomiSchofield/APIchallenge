const express = require ('express')
const hbs = require ('express-handlebars')
const path = require('path')
const app = express()
const elephant = require ('./lib/elephantAPI')
const rickAndMorty = require ('./lib/rickAndMortyAPI')
const memeGenerator = require ('./lib/memeGeneratorAPI')
const bodyParser = require ('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', hbs ({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', async (req, res) => {
    res.render('index')
})

app.get('/elephant', async (req, res) => {
    let data = await elephant.filterData()
    // console.log(data)

    res.render('elephant', {data: data.newData, image: data.image})
}) 


app.get('/RickAndMorty', async(req, res) => {
    // console.log(data)
    res.render('rickAndMorty')
}) 

app.post('/RickAndMorty', async(req, res) => {
    let number = req.body.number
    let data = await rickAndMorty(number)
    console.log(data)



    res.render('rickAndMorty', {data: data.newData, image: data.image})
}) 


app.get('/memeGenerator', async (req, res) => {

    res.render('memeGenerator')
})

app.post('/memeGenerator', async (req, res) => {
    let number = req.body.number
    let data = await memeGenerator(number)
  
    
    res.render('memeGenerator', {data: data.newData, image: data.image } )
    console.log(data)

}) 


app.listen(3000, () => {
    console.log('listening on port 3000')
})

