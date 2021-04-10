const axios = require('axios').default;


let url = "https://jsonplaceholder.typicode.com/todos/1"


const getDataAsync = async () => {
    const { data } = await axios({
        method: "get",
        url:url
    })
    console.log("data", data)
}

getDataAsync()

const getDataSync = () => {
    const { data } = axios({
        method: 'get',
        url:url
    })
    console.log("getDatsSync", data)
}

getDataSync()