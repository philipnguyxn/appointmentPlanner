import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input {...register("name", {
        required: true,
        minLength: 1
      })} />
      <input type='number' {...register("phoneNumber", {
        required: true,
        valueAsNumber: true
      })} />
      <input {...register("email", {
        required: true,
        pattern: /[a-z]+@gmail.com/
      })} />
      <input type="submit" />
    </form>

  )
};
