"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: string;
}

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),

  email: z.string().email("Please enter a valid email"),

  phone: z.string().min(10, "Please enter a valid phone number"),

  business: z.string().optional(),

  requirements: z
    .string()
    .min(10, "Please describe your project"),
});

type FormValues = z.infer<typeof formSchema>;

export function PricingModal({
  open,
  onOpenChange,
  plan,
}: PricingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitted(true);
  };

  return (
    <Dialog>
      {/* ... */}
    </Dialog>
  );
}

      <DialogContent className="sm:max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-3xl font-bold text-slate-900">
            Get Started
          </DialogTitle>

          <DialogDescription className="text-slate-500">
            Fill in your details and we'll contact you shortly.
          </DialogDescription>
        </DialogHeader>

       {submitted ? (
  <div className="py-8 text-center">
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
      <CheckCircle2 className="h-10 w-10 text-green-600" />
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-900">
      Thank You!
    </h3>

    <p className="mt-3 text-slate-600">
      Your request has been submitted successfully.
    </p>

    <div className="mt-6 rounded-xl border bg-slate-50 p-4">
      <p className="text-sm text-slate-500">
        Selected Plan
      </p>

      <p className="mt-1 font-semibold text-blue-600">
        {plan}
      </p>
    </div>

    <p className="mt-6 text-sm text-slate-500">
      Our team will contact you within
      <span className="font-semibold">
        {" "}
        2–4 business hours.
      </span>
    </p>

    <Button
      className="mt-8 w-full"
      onClick={() => {
        setSubmitted(false);
        onOpenChange(false);
      }}
    >
      Continue Browsing
    </Button>
  </div>
) : (
<form
  onSubmit={handleSubmit(onSubmit)}
  className="mt-6 space-y-5"
>
          {/* Selected Plan */}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm text-slate-500">
              Selected Plan
            </p>

            <p className="mt-1 text-xl font-semibold text-blue-700">
              {plan}
            </p>
          </div>

          {/* Name */}

          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>

            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>

            <Input
              id="phone"
              placeholder="+91 9876543210"
              {...register("phone")}
            />

            {errors.phone && (
              <p className="text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Business */}

          <div className="space-y-2">
            <Label htmlFor="business">
              Business Name
            </Label>

            <Input
              id="business"
              placeholder="ABC Technologies"
              {...register("business")}
            />
          </div>

          {/* Requirements */}

          <div className="space-y-2">
            <Label htmlFor="requirements">
              Project Requirements *
            </Label>

            <Textarea
              id="requirements"
              rows={5}
              placeholder="Tell us about your project..."
              {...register("requirements")}
            />

            {errors.requirements && (
              <p className="text-sm text-red-500">
                {errors.requirements.message}
              </p>
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Get Started"}
            </Button>
          </div>
        </form>
)}
      </DialogContent>
    </Dialog>
  );
}