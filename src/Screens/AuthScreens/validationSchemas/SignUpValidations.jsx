import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  firstname: Yup.string().required("Your first name is required"),

  lastname: Yup.string().required("Your last name is required"),

  username: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(25, "Must not exceed 25 characters")
    .required("Username is required"),

  // pagename: Yup.string()
    // .min(4, "Must be at least 4 characters")
    // .max(25, "Must not exceed 25 characters")
    // .required("Page name is required"),

  email: Yup.string()
    .email()
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "Not a proper email"
    )
    .required("Email required"),

  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password should be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number, and one special character,"
    )
    .min(8, "Password must be at least 8 characters"),

  confirmPassword: Yup.string()
    .required("Confirm password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  // phone_number: Yup.string()
  //   .matches(/^\d{10}$/, "Phone number is not valid")
  //   .required("Phone number required"),
    phone_number: Yup.string()
  .trim()
  .required("Phone number is a required field")
  .test(
    'valid-start',
    'Phone number must start with 6, 7, 8, or 9',
    (value) => {
      if (!value) return false; // Handles the case when value is null or undefined.
      return /^[6-9]/.test(value); // Checks if the first digit is 6, 7, 8, or 9.
    }
  )
  .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number"),

});
   