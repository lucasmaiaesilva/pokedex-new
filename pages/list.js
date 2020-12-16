import Link from 'next/link'

export default function StaticFetch({ data }) {
  const { results: pokemons } = data

  return (
    <>
      <h1>lista de pokemons</h1>
      {pokemons.map((pokemon) => {
        const id = pokemon.url.split('/').slice(-2).join('')

        return (
          <div key={pokemon.name}>
            <Link href={`/${id}`}>
              <a>{pokemon.name}</a>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    },
  }
}
