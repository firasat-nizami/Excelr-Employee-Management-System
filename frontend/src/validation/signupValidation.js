import * as Yup from "yup";

// Calculate Age from DOB
const calculateAge = (dob) => {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),

  employmentCode: Yup.string()
    .required("Employment Code is required")
    .matches(/^\d+$/, "Only numbers allowed"),

  dob: Yup.string()
    .required("DOB is required")
    .test("age-check", "Age must be at least 18", function (value) {
      return calculateAge(value) >= 18;
    }),

  gender: Yup.string().required("Gender is required"),

  personalMail: Yup.string()
    .email("Invalid email format")
    .required("Personal Email is required"),

  companyMail: Yup.string()
    .email("Invalid email format")
    .required("Company Email is required"),

  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),

  emergencyContactName: Yup.string().required("Emergency contact name required"),

  emergencyMobile: Yup.string()
    .required("Emergency mobile number required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),

  // Current Address
  currentCity: Yup.string().required("City is required"),
  currentAddressLine1: Yup.string().required("Address Line 1 is required"),
  currentPincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[0-9]{6}$/, "Must be 6 digits"),

  // Permanent Address
  permanentCity: Yup.string().required("City is required"),
  permanentAddressLine1: Yup.string().required("Address Line 1 is required"),
  permanentPincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[0-9]{6}$/, "Must be 6 digits"),

  // Password
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
