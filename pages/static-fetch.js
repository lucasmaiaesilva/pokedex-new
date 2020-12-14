export default function StaticFetch({ data }) {
  return (
    <>
      <h1>teste</h1>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}
