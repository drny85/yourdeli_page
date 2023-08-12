"use client";
import EmailForm from "@/components/EmailForm";
import { EmailBody } from "@/types";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  message: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm<FormInputs>({
    shouldUseNativeValidation: true,
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const params = { email: data.email, message: data.message };
    try {
      const response = await axios.post("/api/email", {
        email: params.email,
        name: "Robert Melendez",
      });
      console.log(response.data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid h-screen place-items-center w-full">
      <section className="flex-col gap-5 p-10 w-full flex max-w-[680px] align-center justify-center bg-stone-800 rounded-md shadow-md text-stone-50">
        <h2 className=" text-center text-4xl font-bold text-stone-50">
          Contact Us
        </h2>

        <EmailForm />
      </section>
    </div>
  );
};

export default Contact;
