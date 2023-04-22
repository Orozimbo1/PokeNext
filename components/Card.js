import styles from '../styles/Card.module.css' 

import Image from 'next/image'
import Link from 'next/link'

const Card = ({ pokemon }) => {

  return (
    <div className={styles.card}>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${pokemon.id}.png`} 
        width={100} 
        height={100} 
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemons/${pokemon.id}`}>Detalhes</Link>
    </div>
  )
}

export default Card