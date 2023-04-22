import axios from "axios"

import Image from "next/image"

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {

  const maxPokemons = 1
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await axios.get(`${api}/?limit=${maxPokemons}`)
  const data = await res.data

  // Params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: true,
  }

}

export const getStaticProps = async (context) => {

  const id = context.params.pokemonId

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.data

  return {
    props: { pokemon: data },
  }

}

const Pokemon = ({ pokemon }) => {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      {/* <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${pokemon.id}.png`} 
        width={200} 
        height={200} 
        alt={pokemon.name} 
        priority={true}
      /> */}
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span 
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon