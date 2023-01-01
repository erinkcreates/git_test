let userName = prompt("Username:", '');

if (userName === "Admin") {

    let pass = prompt("Password:", '');

    if (pass === "TheMaster") { 

        alert("Welcome!");

    } else if (pass === "" || pass === null) {

        alert ("Password cancelled");

    } else { alert("Wrong password"); }

} else if (userName === '' || userName === null) {
    alert("Username cancelled")

} else { alert("I don't know you");

}