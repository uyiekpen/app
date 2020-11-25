import Axios from "axios"

const axios = Axios.create({
    baseURL:"http://api.github.com/users"
})

export default axios