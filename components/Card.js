import styles from '../styles/Card.module.css' 

import Image from 'next/image'
import Link from 'next/link'

const Card = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <Image 
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
        width={100} 
        height={100} 
        alt={pokemon.name} 
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  )
}

export default Card