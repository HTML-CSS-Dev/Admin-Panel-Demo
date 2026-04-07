const submit = document.forms["send"];
const fullName = submit['fname'];
const password = submit['pass'];


const accounts = JSON.parse(localStorage.getItem("userAccounts")) || [{
        name:"admin",
        password:"1234"
    }];

submit.addEventListener( "submit" , (e) => {
    e.preventDefault();

    for( let user of accounts ) {

        if((user.name === fullName.value) && (user.password === password.value) ) {
            window.localStorage.setItem("isAdmin" , fullName.value)
            window.location.href = "http://127.0.0.1:5500/admin-panel/index.html?";
            clearingInput()
            return
        }
    }

        alert("The account does not exist")
        clearingInput();

});


// input cleaner
function clearingInput () {
    submit['fname'].value = null;
    submit['pass'].value = null;
}