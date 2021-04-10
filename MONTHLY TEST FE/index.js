var form = document.querySelector('form')
var body = document.querySelector('body')

var validateHex = (hexValue) => {
    let re = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    console.log(re.test(hexValue))
    return re.test(hexValue)
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    var hex = e.target.hex.value
    if (!hex) {
        alert("Fields are empty")
        return
    }
    var isTrue = validateHex(hex)
    if (isTrue) {
        body.style.backgroundColor = hex
    }
    else {
        alert("invalid hex code")
    }
    
})