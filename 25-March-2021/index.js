

var form = document.querySelector('form')
var showData = document.querySelector('#show-data')

const getDataFromApi = async(id) => {
    //We will write all our business logic here, to get data from API
    try {
        var data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        var converted = await data.json()
        console.log("its working", converted)
        showData.innerHTML = `<h1>ID: ${converted.id}</h1>
        <h1>Title: ${converted.title}</h1>
        <h1>Completed: ${converted.completed}
        `
        // console.log("user", converted)
    }
    catch (err) {
        console.log("Error in getDataFromApi", err)
        alert("Some error occured")
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = e.target.id.value
    if (!id) {
        alert("Please ender id")
        return
    }
    getDataFromApi(id)
   
})

// synchronous function
// asynchronous function
//javascript is sigle threaded language
// whie python is multi thread