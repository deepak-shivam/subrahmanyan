// alert("it is connected")


var form = document.querySelector('form')
var formData = document.querySelector('#form-data')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value

    if (!name || !email || !password) {
        alert("Feilds are empty")
        return
    }

    formData.innerHTML = `
    

    <h1 class="to-red">Name: ${name}</h1>
    <h1 class="to-red">Email: ${email}</h1>
    <h1 class="to-red">Password: ${password} </h1>
   
    `

    var h1s = document.querySelectorAll('h1')

    for (var i = 0; i < h1s.length; i++){
        h1s[i].style.display = none
    }



    // console.log("name", name)
    // console.log("email", email)
    // console.log("password", password)

    // alert(name, email, password)




    
})