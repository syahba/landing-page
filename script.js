// Form
const btnSubmit = document.getElementById('submit-form');
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    submit();
});

// Fet Form Inputs
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const data = { name, email, city, zipCode, status };
    return data;
};

// Validate Zipcode Number
function isNumber(data) {
    const validate = isNaN(data) ? false : true;
    return validate;
};

// Validate Checkbox
function checkboxIsChecked() {
    const status = document.getElementById('status').checked;
    if (status === true) {
        return true;
    } else { return false; }
}

// Validate Form
function validateFormData(form) {
    if (form && isNumber(form.zipCode) && checkboxIsChecked()) {
        return true;
    } else { return false }
}

// Form Submission
function submit() {
    const warning = document.getElementById('warning');
    const obj = handleGetFormData();
    if (validateFormData(obj)) {
        warning.innerHTML = '';
        alert('Thank you for contacting us!')
    } else { warning.innerHTML = 'Periksa form anda sekali lagi!'; }
}
