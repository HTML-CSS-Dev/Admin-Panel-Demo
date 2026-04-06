const form = document.forms["send"];

// Error names
const errors = {
    user:document.getElementById("nameError"),
    password:document.getElementById("passError"),
    success:document.getElementById("success") };

const accounts = JSON.parse(localStorage.getItem("userAccounts")) || [];

form.onsubmit = function(e) {
    e.preventDefault();
    
    // CHECK VALIDATION:
    if( !(form['fname'].value.length > 5) && !(form['pass'].value.length > 8)  ) {
        errors.user.classList.replace("hidden" , "block");
        errors.password.classList.replace("hidden" , "block");
        return
    } else if( !(form['fname'].value.length > 5) ) {
        errors.user.classList.replace("hidden" , "block")
        return
    } else if( !(form['pass'].value.length > 8) ) {
        errors.password.classList.replace("hidden" , "block")
        return
    }

    accounts.push({
        name:form['fname'].value,
        password:form['pass'].value,
    })


    // switch-off ERRORS
    errors.user.classList.replace("block" , "hidden" )
    errors.password.classList.replace("block" , "hidden")

   const checking = JSON.parse(localStorage.getItem("userAccounts")) || [];
    
    for( let i of checking ) {
        console.log(i.name , i.password )
        if ( i.name === form['fname'].value && i.password === form['pass'].value ) {
            alert("The username and password has already been added")
            
            // CLEAR INPUTS
            clearingInput()
            return
        } else if ( i.name === form['fname'].value ) {
            alert("The username has already been added")

            // CLEAR INPUTS:
            clearingInput()
            return
        }
    }

    // USERS DATA
    localStorage.setItem("userAccounts" , JSON.stringify(accounts));

    // CLEAR INPUTS
    clearingInput()

    alert("The account has created succesfully")
    window.location.href = "http://127.0.0.1:5500/login-panel/index.html";
}


// input cleaner
function clearingInput () {
    form['fname'].value = null;
    form['pass'].value = null;
}