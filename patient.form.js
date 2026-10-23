 /* Place your JavaScript in this file */

//Program name: patient.form.js
//Author: Enrique Delgado
//Date Created: 10/17/26
//Version: 1.1
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

const firstNameInput = document.querySelector('input[name="firstName"]');
firstNameInput.addEventListener('input', () => {
    const value = firstNameInput.value.trim();
    const error = document.getElementById("firstNameError");
    if (!validateFirstName(value)) {
        error.textContent = "First name must be 2–30 letters.";
        error.style.color = "red";
    } else {
        error.textContent = "";
    }
});

const miField = document.querySelector('input[name="middleInitial"]');
miField.addEventListener('input', () => {
    const error = document.getElementById("middleInitialError");
    if (!validateMiddleInitial(miField.value.trim())) {
        error.textContent = "Middle initial must be 1 letter.";
    } else {
        error.textContent = "";
    }
});

const lastNameField = document.querySelector('input[name="lastName"]');
lastNameField.addEventListener('input', () => {
    const error = document.getElementById("lastNameError");
    if (!validateLastName(lastNameField.value.trim())) {
        error.textContent = "Last name must be 2–30 letters.";
    } else {
        error.textContent = "";
    }
});

const dobField2 = document.querySelector('input[name="dob"]');
dobField2.addEventListener('blur', () => {
    const error = document.getElementById("dobError");
    if (!validateDOB(dobField2.value)) {
        error.textContent = "Invalid date of birth.";
    } else {
        error.textContent = "";
    }
});

const genderField = document.querySelector('select[name="gender"]');
genderField.addEventListener('change', () => {
    const error = document.getElementById("genderError");
    if (!validateGender(genderField.value)) {
        error.textContent = "Please select a gender.";
    } else {
        error.textContent = "";
    }
});

const ssnField = document.querySelector('input[name="ssn"]');
ssnField.addEventListener('input', () => {
    const error = document.getElementById("ssnError");
    if (!validateSSN(ssnField.value)) {
        error.textContent = "SSN must be 9 digits.";
    } else {
        error.textContent = "";
    }
});

const address1Field = document.querySelector('input[name="address1"]');
address1Field.addEventListener('input', () => {
    const error = document.getElementById("address1Error");
    if (!validateAddress1(address1Field.value)) {
        error.textContent = "Address must be 2–30 characters.";
    } else {
        error.textContent = "";
    }
});

const address2Field = document.querySelector('input[name="address2"]');
address2Field.addEventListener('input', () => {
    const error = document.getElementById("address2Error");
    if (!validateAddress2(address2Field.value)) {
        error.textContent = "Address must be 2–30 characters.";
    } else {
        error.textContent = "";
    }
});

const cityField = document.querySelector('input[name="city"]');
cityField.addEventListener('input', () => {
    const error = document.getElementById("cityError");
    if (!validateCity(cityField.value)) {
        error.textContent = "City must be 2–30 letters.";
    } else {
        error.textContent = "";
    }
});


const stateField = document.querySelector('select[name="state"]');
stateField.addEventListener('change', () => {
    const error = document.getElementById("stateError");
    if (!validateState(stateField.value)) {
        error.textContent = "Please select a state.";
    } else {
        error.textContent = "";
    }
});

const zipField = document.querySelector('input[name="zip"]');
zipField.addEventListener('input', () => {
    const error = document.getElementById("zipError");
    if (!validateZip(zipField.value)) {
        error.textContent = "ZIP must be 5 digits.";
    } else {
        error.textContent = "";
    }
});

const emailField = document.querySelector('input[name="email"]');
emailField.addEventListener('input', () => {
    const error = document.getElementById("emailError");
    if (!validateEmail(emailField.value)) {
        error.textContent = "Invalid email format.";
    } else {
        error.textContent = "";
    }
});

const userIDField = document.querySelector('input[name="userID"]');
userIDField.addEventListener('input', () => {
    const error = document.getElementById("userIDError");
    if (!validateUserID(userIDField.value)) {
        error.textContent = "User ID must start with a letter and be 5–30 characters.";
    } else {
        error.textContent = "";
    }
});

const passwordField = document.querySelector('input[name="password"]');
passwordField.addEventListener('input', () => {
    const error = document.getElementById("passwordError");
    const value = passwordField.value;
    const userID = userIDField.value.trim();
    const firstName = firstNameField.value.trim();
    const lastName = lastNameField.value.trim();

    let messages = [];

    if (value.length < 8 || value.length > 30) {
        messages.push("Must be 8–30 characters.");
    }
    if (!/[A-Z]/.test(value)) {
        messages.push("Must contain an uppercase letter.");
    }
    if (!/[a-z]/.test(value)) {
        messages.push("Must contain a lowercase letter.");
    }
    if (!/\d/.test(value)) {
        messages.push("Must contain a number.");
    }
    if (!/[!@#%^&*()\-_=+\\/><.,`~]/.test(value)) {
        messages.push("Must contain a special character.");
    }
    const pw = value.toLowerCase();
    if (pw.includes(userID.toLowerCase())) {
        messages.push("Cannot contain your User ID.");
    }
    if (pw.includes(firstName.toLowerCase())) {
        messages.push("Cannot contain your first name.");
    }
    if (pw.includes(lastName.toLowerCase())) {
        messages.push("Cannot contain your last name.");
    }

    // Display messages
    if (messages.length > 0) {
        error.textContent = messages.join(" ");
    } else {
        error.textContent = "";
    }
});


const confirmPasswordField = document.querySelector('input[name="confirmPassword"]');
confirmPasswordField.addEventListener('input', () => {
    const error = document.getElementById("confirmPasswordError");
    if (!validateConfirmPassword(passwordField.value, confirmPasswordField.value)) {
        error.textContent = "Passwords do not match.";
    } else {
        error.textContent = "";
    }
});

const symptomsField = document.querySelector('textarea[name="symptoms"]');
symptomsField.addEventListener('input', () => {
    const error = document.getElementById("symptomsError");
    if (!validateSymptoms(symptomsField.value)) {
        error.textContent = "Quotes are not allowed.";
    } else {
        error.textContent = "";
    }
});

const insuranceFields = document.querySelectorAll('input[name="insurance"]');
insuranceFields.forEach(radio => {
    radio.addEventListener('change', () => {
        const error = document.getElementById("insuranceError");
        const value = document.querySelector('input[name="insurance"]:checked')?.value || "";
        if (!validateInsurance(value)) {
            error.textContent = "Please select Yes or No.";
        } else {
            error.textContent = "";
        }
    });
});

const sliderField = document.getElementById("healthSlider");
sliderField.addEventListener('change', () => {
    const error = document.getElementById("healthError");
    if (!validateSlider(sliderField.value)) {
        error.textContent = "Health rating must be 1–10.";
    } else {
        error.textContent = "";
    }
});




// Confirm Password: show if error occurs
confirmPassword.addEventListener('blur', () => {
    const warning = document.getElementById("confirmPasswordWarning");
    const pw = password.value.trim();
    const cpw = confirmPassword.value.trim();
if (pw === "" || cpw === "") {
    warning.textContent = "Password fields cannot be blank.";
    confirmPassword.style.border = "4px solid red";
    return;
}

if (pw !== cpw) {
    warning.textContent = "Passwords do not match.";
    confirmPassword.style.border = "4px solid red";
    return;
}

warning.textContent = "";
confirmPassword.style.border = "4px solid green";


});


//Date of Birth: min and max so it moves with the date. 
const dobField = document.querySelector('input[name="dob"]');
if (dobField) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const maxDate = `${yyyy}-${mm}-${dd}`;
    const minYear = yyyy - 120;
    const minDate = `${minYear}-${mm}-${dd}`;
    dobField.setAttribute("max", maxDate);
    dobField.setAttribute("min", minDate);
}


 const form = document.querySelector('form');
//Submit the form js
form.addEventListener('submit', (e) => {
    let errors = [];

    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    if (!validateFirstName(firstName)) {
        errors.push("First Name is invalid.");
        document.getElementById("firstNameError").textContent = "Invalid first name.";
    }

    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    if (!validateLastName(lastName)) {
        errors.push("Last Name is invalid.");
        document.getElementById("lastNameError").textContent = "Invalid last name.";
    }

    const passwordValue = document.querySelector('input[name="password"]').value;
    const userID = document.querySelector('input[name="userID"]').value.trim();
    const firstNameValue = document.querySelector('input[name="firstName"]').value.trim();
    const lastNameValue = document.querySelector('input[name="lastName"]').value.trim();

    if (!validatePassword(passwordValue, userID, firstNameValue, lastNameValue)) {
        errors.push("Password is invalid.");
        document.getElementById("passwordError").textContent = "Invalid password.";
    }

    const confirmPasswordValue = document.querySelector('input[name="confirmPassword"]').value;
    if (!validateConfirmPassword(passwordValue, confirmPasswordValue)) {
        errors.push("Passwords do not match.");
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    }
    if (errors.length > 0) {
        e.preventDefault();
        alert("Please fix the errors before submitting.");
        return;
    }

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
// Middle Initial Validation
function validateMiddleInitial(mi) {
    if (mi.trim() === "") return true; // optional
    const regex = /^[A-Za-z]$/;
    return regex.test(mi);
}
// Last Name Validation
function validateLastName(lastName) {
    const name = lastName.trim();
    const regex = /^[A-Za-z'\-]{2,30}$/;
    return regex.test(name);
}
// Date of Birth Validation
function validateDOB(dob) {
    if (!dob) return false;
    const today = new Date();
    const birthDate = new Date(dob);
    const ageLimit = new Date();
    ageLimit.setFullYear(today.getFullYear() - 120);
    if (birthDate > today) return false;
    if (birthDate < ageLimit) return false;
    return true;
}
// Gender Validation
function validateGender(gender) {
    return gender !== "" && gender !== "--Select Gender--";
}


// SSN Validation
function validateSSN(ssn) {
    const regex = /^\d{9}$/;
    return regex.test(ssn.trim());
}

// Address1 Validation
function validateAddress1(addr) {
    const regex = /^.{2,30}$/;
    return regex.test(addr.trim());
}
// Address2: optional, but Validation if used
function validateAddress2(addr) {
    if (addr.trim() === "") return true;
    const regex = /^.{2,30}$/;
    return regex.test(addr.trim());
}
//City Validation
function validateCity(city) {
    const regex = /^[A-Za-z'\- ]{2,30}$/;
    return regex.test(city.trim());
}


// State Validation
function validateState(state) {
    return state !== "";
}
// ZIP Code Validation
function validateZip(zip) {
    const regex = /^\d{5}(-\d{4})?$/;
    return regex.test(zip.trim());
}
// Email Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}

// UserID Validation
function validateUserID(userID) {
    const regex = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/;
    return regex.test(userID.trim());
}
// Password Validation
function validatePassword(password, userID, firstName, lastName) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\/><.,`~]).{8,30}$/;
    if (!regex.test(password)) return false;
    const pw = password.toLowerCase();
    const uid = userID.toLowerCase();
    const fn = firstName.toLowerCase();
    const ln = lastName.toLowerCase();
    if (pw === uid) return false;
    if (pw.includes(uid)) return false;
    if (pw.includes(fn)) return false;
    if (pw.includes(ln)) return false;

    return true;
}


// Confirm Password Validation
function validateConfirmPassword(password, confirmPassword) {
    if (password.trim() === "" || confirmPassword.trim() === "") {
        return false;
    }
    return password === confirmPassword;
}

// Symptoms Validation
function validateSymptoms(symptoms) {
    const regex = /^[^"]*$/;
    return regex.test(symptoms);
}
// Insurance Validation
function validateInsurance(insurance) {
    return insurance === "yes" || insurance === "no";
}

// Slider Validation
function validateSlider(value) {
    const num = Number(value);
    return num >= 1 && num <= 10;
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
    const zipShort = zip.includes("-") ? zip.split("-")[0] : zip;
    const userIDlower = userID.toLowerCase();
    const maskedPassword = "*".repeat(passwordValue.length);
    const ssnMasked = "*".repeat(ssn.length);



reviewArea.innerHTML = `
    <h3>Review Output</h3>
  ${formatResult("First Name", firstName, validateFirstName(firstName))}
 ${formatResult("Middle Initial", middleInitial, validateMiddleInitial(middleInitial))}
 ${formatResult("Last Name", lastName, validateLastName(lastName))}
 ${formatResult("Date of Birth", dob, validateDOB(dob))}
 ${formatResult("Gender", gender, validateGender(gender))}
 ${formatResult("SSN", ssnMasked, validateSSN(ssn))}
 ${formatResult("Address 1", address1, validateAddress1(address1))}
 ${formatResult("Address 2", address2, validateAddress2(address2))}
 ${formatResult("City", city, validateCity(city))}
 ${formatResult("State", state, validateState(state))}
 ${formatResult("ZIP", zipShort, validateZip(zip))}
 ${formatResult("Email", email, validateEmail(email))}
 ${formatResult("User ID", userIDlower, validateUserID(userID))}
 ${formatResult("Password", maskedPassword, validatePassword(passwordValue, userID, firstName, lastName))}
 ${formatResult("Confirm Password", maskedPassword, validateConfirmPassword(passwordValue, confirmPasswordValue))}
 ${formatResult("Symptoms", symptoms, validateSymptoms(symptoms))}
 ${formatResult("Insurance", insurance, validateInsurance(insurance))}
 ${formatResult("Health Rating", health, validateSlider(health))}

`;
});
