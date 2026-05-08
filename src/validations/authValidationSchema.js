import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const signUpSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
  terms: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms & Conditions"),
});
