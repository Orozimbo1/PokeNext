import Image from "next/image"

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {

  const maxPokemons = 52
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // Params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps = async (context) => {

  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }

}

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image 
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
        width={200} 
        height={200} 
        alt={pokemon.name} 
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span key={index}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon