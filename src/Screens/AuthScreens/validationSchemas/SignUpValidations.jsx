import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  username: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(25, "Must not exceed 25 characters")
    .required("Username is required"),

  pagename: Yup.string()
    .min(4, "Must be at least 4 characters")
    .max(25, "Must not exceed 25 characters")
    .required("Page name is required"),

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
    .required("Confirm Password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  phone_number: Yup.string()
    .matches(/^\d{10}$/, "Phone number is not valid")
    .required("Phone number required"),
});
