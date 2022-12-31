// Check the login

let userName = prompt("Username:");

if (userName === "Admin") {

    let password = prompt("Password:", '');

    if (password === "a") {
        alert( "Welcome!" );
    } else if (password === '' || password === null) {
        alert( "Cancelled" );
    } else {
        alert( "Wrong password" );
    }

}