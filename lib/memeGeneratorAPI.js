const fetch = require ('node-fetch')
// const randomNumberGenerator = (min, max) => {
//     let number = Math.ceil(Math.random() * (max - min) + min)
//     // console.log(number)
//     return number 
// }
// let randomNumber = randomNumberGenerator(1, 183)


const getMemeAPI = async (number) => {
    const url = `http://alpha-meme-maker.herokuapp.com/memes/${number}`
    let data = await fetch(url)

    let JSObject = await data.json()
    
    return JSObject
}

const filterData = async (number) => {
    let data = await getMemeAPI(number)

   const newData = {

    Name  :  data.data.name,
    topText :  data.data.topText,
    bottomText :  data.data.bottomText,
    }

    let image = data.data.image

    return {newData, image}

}

module.exports = filterData

