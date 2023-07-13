// form
const btnSubmit = document.getElementById('submit-form');
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    submit()
});

// get form inputs
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const data = { name, email, city, zipCode, status };
    return data;
};

// validate zipcode number
function isNumber(data) {
    const validate = isNaN(data) ? false : true;
    return validate;
};

// validate checkbox
function checkboxIsChecked() {
    const status = document.getElementById('status').checked;
    if (status === true) {
        return true;
    } else { return false; }
}

// validate form
function validateFormData(form) {
    if (form && isNumber(form.zipCode) && checkboxIsChecked()) {
        return true;
    } else { return false }
}

// form submission
function submit() {
    const warning = document.getElementById('warning');
    const obj = handleGetFormData();
    if (validateFormData(obj)) {
        warning.innerHTML = '';
        alert('Thank you for contacting us!')
    } else { warning.innerHTML = 'Periksa form anda sekali lagi'; }
}