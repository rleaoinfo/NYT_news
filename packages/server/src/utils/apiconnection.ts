import axios from 'axios'

const GetTopNews = async (section: string) => {
    try {
        return await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json`, {
            params: {
                'api-key': process.env.API_KEY
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export default GetTopNews