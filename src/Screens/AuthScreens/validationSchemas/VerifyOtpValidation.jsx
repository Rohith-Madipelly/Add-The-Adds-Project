import * as Yup from "yup";

export const VerifyOtpValidation = Yup.object({
  otp: Yup.string()
    .required("OTP required")
    .test(
      "is-complete",
      "Enter complete OTP",
      (value) => value && value.length === 6
    ),
});
