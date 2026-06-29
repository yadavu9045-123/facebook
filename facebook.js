function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    console.log("===== LOGIN =====");
    console.log("Email :", email);
    console.log("Password :", password);
}

function signup() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    console.log("===== SIGN UP =====");
    console.log("First Name :", fname);
    console.log("Last Name :", lname);
    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Date of Birth :", dob);
    console.log("Gender :", gender);
}