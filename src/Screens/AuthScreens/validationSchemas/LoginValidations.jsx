import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  emailOrPhone: Yup.string()

    .test(
      "is-valid",
      "Invalid email or phone number",
      (value) =>
        Yup.string()
          .email()
          .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
          .isValidSync(value) || /^\d{10}$/.test(value)
    )
    .required("Email or Phone number is required"),
  password: Yup.string().required("Password required"),
});