import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters").max(20, "Password must be not more than 20 characters"),
  name: z.string().min(3, "Min length of name is 3 characters").max(10, "Max length of name is 10 characters"),
    userType: z.string().nullable() .refine((val) => val === "student" || val === "teacher", {
      message: "Please select a user",
    }),
  });



export type RegisterSchema = z.infer<typeof registerSchema>;