function checkAge (age) {
    (age > 18) ?  true : confirm("Did parents allow you?")
}

function checkAge (age) {
    reutrn (age > 18) || confirm("Did parents allow you?")
}

function min(a,b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }
}

function min(a,b) {
    return a < b ? a : b
}

function pow(x,n) {
    n >= 1
    return (x * x)*n
}


ask => {
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution")
};