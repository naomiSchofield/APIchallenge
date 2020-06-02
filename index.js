const express = require ('express')
const hbs = require ('express-handlebars')
const path = require('path')
const app = express()
const elephant = require ('./lib/elephantAPI')
const rickAndMorty = require ('./lib/rickAndMortyAPI')
const memeGen = require ('./lib/memeGeneratorAPI')
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
    let response = await elephant.filterData()

    // console.log(data)

    res.render('elephant', {response})
}) 


app.get('/RickAndMorty', async(req, res) => {
    // console.log(data)
    res.render('rickAndMorty')
}) 

app.post('/RickAndMorty', async(req, res) => {
    let number = req.body.number
    let response = await rickAndMorty.filterData(number)
    // console.log(data)

    res.render('rickAndMorty', {response})
}) 




app.get('/memeGenerator', async (req, res) => {
    let response = await memeGen.filterData()
    // console.log(data)

    res.render('memeGenerator', {response,} )
}) 



app.listen(3000, () => {
    console.log('listening on port 3000')
})

