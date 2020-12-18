import { useRouter } from 'next/router'

export default function PokemonDisplay({ data }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>{ data.name }</h1>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`)
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
