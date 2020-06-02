const fetch = require ('node-fetch')
const randomNumberGenerator = (min, max) => {
    let number = Math.ceil(Math.random() * (max - min) + min)
    // console.log(number)
    return number 
}
let randomNumber = randomNumberGenerator(1, 183)

const url = `http://alpha-meme-maker.herokuapp.com/memes/${randomNumber}`

const getMemeAPI = async () => {
    let data = await fetch(url)

    let JSObject = await data.json()
    return JSObject
}

const filterData = async () => {
    let data = await getMemeAPI()

    let response = {

    nameMeme :  data.name,
    imageMeme :  data.image,
    topText :  data.topText,
    bottomText :  data.bottomText,
    }

    return response

}

module.exports = {
    filterData
}
