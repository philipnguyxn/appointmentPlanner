import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = ({ onSubmit }) => {
  const defaultValues = {
    name: '',
    phoneNumber: '',
    email: ''
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({ defaultValues });

  useEffect(() => {
    isSubmitSuccessful && reset(defaultValues)
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name?.message && <p>Please check the name</p>}

      <input
        type='tel'
        placeholder="Phone Number"
        {...register("phoneNumber", {
          required: true,
          pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
        })}
      />
      {errors.phoneNumber?.message && <p>Please check the phone numbers</p>}

      <input
        placeholder="Email"
        type='email'
        {...register("email",
          {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
      />
      {errors.email?.message && <p>Please check the email</p>}

      <button type="submit">Submit</button>
    </form>
  )
};
