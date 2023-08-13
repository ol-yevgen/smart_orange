const basicApiUrl = process.env.NEXT_PUBLIC_BASIC_API

export const getData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        if (!response.ok) throw new Error(`Unable to fetch ${url.replace(basicApiUrl, '')}`)

        return data
    } catch {
        return null
    }
}