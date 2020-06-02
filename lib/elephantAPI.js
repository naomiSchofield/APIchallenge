const fetch = require ('node-fetch')
const URI = `https://elephant-api.herokuapp.com/elephants/random`

const getElephant = async () => {
    let data = await fetch(URI)

    let JSObject = await data.json()
    return JSObject
}

const filterData = async () => {
    let data = await getElephant()

    let response = {

        species : data[0].species,
        image : data[0].image,
        name : data[0].name,
        info: data[0].note,

    }

    return response
}

module.exports = {
    filterData
}