import * as Yup from "yup";

export const ForgotPassEmailValidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "Not a proper email"
    )
    .required("Email required"),
});
