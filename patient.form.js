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
    reviewArea.innerHTML = "";
    reviewArea.innerHTML = "<p>Review button clicked..</p>";
});
