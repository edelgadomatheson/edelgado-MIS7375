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
//Review Button javascrip
const reviewButton = document.getElementById("reviewButton");
const reviewArea = document.getElementById("reviewArea");

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
        <h3>Review Output (Raw Values)</h3>
        <p>First Name: ${firstName}</p>
        <p>Middle Initial: ${middleInitial}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Gender: ${gender}</p>
        <p>SSN: ${ssn}</p>
        <p>Address 1: ${address1}</p>
        <p>Address 2: ${address2}</p>
        <p>City: ${city}</p>
        <p>State: ${state}</p>
        <p>ZIP: ${zip}</p>
        <p>Email: ${email}</p>
        <p>User ID: ${userID}</p>
        <p>Password: ${passwordValue}</p>
        <p>Confirm Password: ${confirmPasswordValue}</p>
        <p>Symptoms: ${symptoms}</p>
        <p>Insurance: ${insurance}</p>
        <p>Health Rating: ${health}</p>
    `;
});
