const fetch = require ('node-fetch')
 
 // const randomNumberGenerator = (min, max) => {
//     let number = Math.ceil(Math.random() * (max - min) + min)
//     // console.log(number)
//     return number 

// }
// let randomNumber = randomNumberGenerator(1, 183)
// const url = `https://rickandmortyapi.com/api/character/${randomNumber}`



const getRickAndMortyAPI = async (number) => {
    const url = `https://rickandmortyapi.com/api/character/${number}`
    let data = await fetch(url)
    let JSObject = await data.json()

    return JSObject

}


const filterData = async (number) => {

    let data = await getRickAndMortyAPI(number)

    const newData = {
    
    name : data.name,
    status: data.status,
    gender: data.gender,
    origin: data.origin.name,

    }

    return {newData, 
        image : data.image,
    }
    
}


module.exports = filterData



