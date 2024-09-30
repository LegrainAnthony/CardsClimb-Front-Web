import { object, string } from "yup";

// Minimum eight characters, at least one letter, one number and one special character:
// const passwordRegex = new RegExp(
//     "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
//   );
  
export const loginSchema = object({
    email: string().email("Invalid email").required("Required"),
    password: string()
        .min(8, "Must be at least 8 characters")
        // .matches(passwordRegex, {
        // message:
        //     "Must contain at least one letter, one number and one special character",
        // })
        .required("Required"),
});
  

