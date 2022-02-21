const login = prompt('Please enter your UserID!')
const password = 'TheMaster'

if(login === "Admin") {
    let adminPass = prompt('Admin, please enter your password.')
        if (adminPass === password) {
            alert("Welcome Admin!");
        }
        else if (adminPass === null || adminPass === "") {
            alert("Cancelled!")
        }
        else {
            alert("Wrong Password!");
        }
}

else if (login === null || login === ""){
    alert("Cancelled!")
}

else {
    alert("I don't know you :)")
}
