export default class MoviesAppService {
    async getResource(url) {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('error')
        }
        // eslint-disable-next-line no-return-await
        return await res.json()
    }

    async getResults() {
        const res = await this.getResource(
            `https://api.themoviedb.org/3/search/movie?api_key=76e2caf3b19eb8a6821b6bceb295ee09&language=en-US&query=return&page=1&include_adult=false`
        )
        return res.results
    }
}
