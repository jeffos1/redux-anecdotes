import axios from "axios"
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
const anecdotes = await axios.get(baseUrl)
return anecdotes.data
}

const create = async (content) => {
    const anecdotes = await axios.post(baseUrl, content)
    return anecdotes.data
}

const vote = async (id, content) => {
    const voted = await axios.put(baseUrl+`/${id}`, content)
    return voted.data
}

const anecdoteService = {
    getAll, create, vote
}

export default anecdoteService