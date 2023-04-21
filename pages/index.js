import styles from '@/styles/Home.module.css'

export async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // Add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
