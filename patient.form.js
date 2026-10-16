 /* Place your JavaScript in this file */

//Program name: patient.form.js
//Author: Enrique Delgado
//Date Created: 9/27/26
//Version: 1.0
//Description: Patient Registration Form for whenever a patient visits the clinic.

//validate the passwords are the same. 
const password= document.querySelector('input[name="password"]');
const confirmPassword= document.querySelector('input[name="confirmPassword"]');
confirmPassword.addEventListener('input',() =>{
    if (confirmPassword.value !== password.value){
        confirmPassword.style.border="4px solid red";
    }else {
        confirmPassword.style.border ="4px solid green"
    }
    });

 const form = document.querySelector('form');
//Submit the form js
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});
//js for the slider to adjust its value live
const slider = document.getElementById("healthSlider");
const output = document.getElementById("healthValue");

if (slider && output) {
    output.textContent = slider.value;
    slider.oninput = function() {
        output.textContent = this.value;
    };
}

//First Name validation
function validateFirstName(firstName) {
    const name = firstName.trim();
    if (name.length < 2 || name.length > 30) {
        return false;
    }
    const regex = /^[A-Za-z'\-]{2,30}$/;
    return regex.test(name);
}




//Review Button javascript
const reviewButton = document.getElementById("reviewButton");
const reviewArea = document.getElementById("reviewArea");

function formatResult(label, value, pass) {
    const status = pass ? "PASS" : "FAIL";
    return `<p><strong>${label}:</strong> ${value} — <span style="color:${pass ? 'green' : 'red'}">${status}</span></p>`;
}

reviewButton.addEventListener("click", function () {
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const middleInitial = document.querySelector('input[name="middleInitial"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    const dob = document.querySelector('input[name="dob"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const ssn = document.querySelector('input[name="ssn"]').value.trim();
    const address1 = document.querySelector('input[name="address1"]').value.trim();
    const address2 = document.querySelector('input[name="address2"]').value.trim();
    const city = document.querySelector('input[name="city"]').value.trim();
    const state = document.querySelector('select[name="state"]').value;
    const zip = document.querySelector('input[name="zip"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const userID = document.querySelector('input[name="userID"]').value.trim();
    const passwordValue = document.querySelector('input[name="password"]').value;
    const confirmPasswordValue = document.querySelector('input[name="confirmPassword"]').value;
    const symptoms = document.querySelector('textarea[name="symptoms"]').value.trim();
    const insurance = document.querySelector('input[name="insurance"]:checked')?.value || "";
    const health = document.getElementById("healthSlider").value;

reviewArea.innerHTML = `
    <h3>Review Output</h3>
   ${formatResult("First Name", firstName, validateFirstName(firstName))}
    ${formatResult("Middle Initial", middleInitial, true)}
    ${formatResult("Last Name", lastName, true)}
    ${formatResult("Date of Birth", dob, true)}
    ${formatResult("Gender", gender, true)}
    ${formatResult("SSN", ssn, true)}
    ${formatResult("Address 1", address1, true)}
    ${formatResult("Address 2", address2, true)}
    ${formatResult("City", city, true)}
    ${formatResult("State", state, true)}
    ${formatResult("ZIP", zip, true)}
    ${formatResult("Email", email, true)}
    ${formatResult("User ID", userID, true)}
    ${formatResult("Password", passwordValue, true)}
    ${formatResult("Confirm Password", confirmPasswordValue, true)}
    ${formatResult("Symptoms", symptoms, true)}
    ${formatResult("Insurance", insurance, true)}
    ${formatResult("Health Rating", health, true)}
`;
});
