import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),

  business: z.string().optional(),

  requirements: z
    .string()
    .min(10, "Please describe your project"),
});

type FormValues = z.infer<typeof formSchema>;