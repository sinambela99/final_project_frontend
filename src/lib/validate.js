// Validate Login Form
export default function LoginValidate(values) {
    const errors = {}

    // Validation for Email
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Validation for Password
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Password must be greater than 8 and less then 20 characters long'
    } else if (values.password.includes(`${' '}`)) {
        errors.password = 'Invalid Password'
    }

    return errors
}

// Validate Register Form
export function RegisterValidate(values) {
    const errors = {}

    // Validation for Username
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    } else if (values.username.includes(`${' '}`)) {
        errors.username = 'Invalid Username'
    }

    // Validation for Email
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Validation for Password
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Password must be greater than 8 and less then 20 characters long'
    } else if (values.password.includes(`${' '}`)) {
        errors.password = 'Invalid Password'
    }

    // Validation for CPassword
    if (!values.cpassword) {
        errors.cpassword = 'Required'
    } else if (values.cpassword !== values.password) {
        errors.cpassword = 'Password Not Match..!!'
    } else if (values.cpassword.includes(`${' '}`)) {
        errors.cpassword = 'Invalid Password'
    }

    return errors
}