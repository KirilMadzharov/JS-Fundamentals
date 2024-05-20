function passwordValidator(password) {
    let isValid = true;

    // Check the length of the password
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Check if password consists only of letters and digits
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    // Check if password has at least 2 digits
    const digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    // If the password is valid, print the success message
    if (isValid) {
        console.log("Password is valid");
    }
}

// Examples

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

