"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(6, "type your full name"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "messae must be at least 10 caracters long"),
});

const subjectOptions = [
  "General Inquiry",
  "Feedback",
  "Technical Support",
  "Order Issue",
  "Payment Issue",
  "Other",
];

const EmailForm: React.FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    resetField,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const params = {
      email: data.email,
      message: data.message,
      subject: data.subject,
      name: data.name,
    };
    try {
      const response = await axios.post("/api/email", {
        email: params.email,
        name: params.name,
        subject: params.subject,
        message: params.message,
      });
      console.log(response.data);
      router.replace("/email-sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Full Name
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              autoFocus
              className="rounded p-2 text-black w-full capitalize"
              value={field.value}
            />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className="rounded p-2 text-black w-full"
              value={field.value}
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="subject" className="block font-medium mb-1  ">
          Subject
        </label>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <select {...field} className="rounded p-2 text-black w-full">
              <option value="" disabled className="py-6">
                Select a subject
              </option>
              {subjectOptions.map((option) => (
                <option key={option} value={option} className="text-black py-6">
                  {option}
                </option>
              ))}
            </select>
          )}
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className="rounded p-2 text-start text-black w-full"
              rows={5}
            ></textarea>
          )}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-slate-400 border-lg py-2 rounded-md text-lg fon"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
