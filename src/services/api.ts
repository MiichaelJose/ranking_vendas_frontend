async function fetchData(endpoint: string) {
    const result = await fetch(`${process.env.BASE_URL}/${endpoint}`)
    return result.json()
}

export default fetchData