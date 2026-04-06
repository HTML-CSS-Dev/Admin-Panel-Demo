const submit = document.forms["send"];
const fullName = submit['fname'];
const password = submit['pass'];


submit.addEventListener( "submit" , (e) => {
    e.preventDefault();

    const accounts = JSON.parse(localStorage.getItem("userAccounts")) || [{
        name:"admin",
        password:"1234"
    }];

    for( let user of accounts ) {
        if(!(user.name === fullName.value) && !(user.password === password.value)) {
            alert("The account does not exist")
            clearingInput();
            return
        }
    }

    window.location.href = "http://127.0.0.1:5500/admin-panel/index.html?";
    clearingInput()
});


// input cleaner
function clearingInput () {
    form['fname'].value = null;
    form['pass'].value = null;
}