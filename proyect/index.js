const axios = require('axios')
const fs = require('fs').promises // esto devuelve una promesa
const path = require('path')

const API_URL = 'https://rickandmortyapi.com/api/character'

const main = async () => {
  const respponse = await axios.get(API_URL)
  const { data: { results } } = respponse

  const characters = results
    .map(
      (character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species
        }
      }
    )
    .map((personaje) => Object.values(personaje).join(',')) // creamos una lista para nuestro csv
    .join('\n')
  // console.log('Respuesta del servidor', characters)

  await fs.writeFile(path.join(__dirname, 'data.csv'), characters) // aqui cremos el csv implementando el fileSystem y el path para colocalor en nuestro directorio raiz
}

main()
