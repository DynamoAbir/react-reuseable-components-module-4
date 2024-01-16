import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(8, "Password is too short"),
  gender: z.string(),
});
export type TNormalForm = z.infer<typeof SignUpSchema>;
