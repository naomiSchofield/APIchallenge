const fetch = require ('node-fetch')

const getElephant = async () => {
    const URI = `https://elephant-api.herokuapp.com/elephants/random`

    let data = await fetch(URI)

    let JSObject = await data.json()
    return JSObject
}

const filterData = async () => {
    let data = await getElephant()

    let newData = {

        species : data[0].species,
        name : data[0].name,
        info: data[0].note,

    }

    let image = data[0].image
    return {newData, image}

}

module.exports = {
    filterData
}