
const username = getElementById("username")
const password = getElementById("password")
const button = getElementById("button")

    button.addEvent('click', (e) => {
    e.preventDefault()
    const data = {
        username: usuario.value,
        password: password.value
    }
    document.write(data)

})
