import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// DateTimePicker from MUI
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export const AppointmentForm = ({ onSubmit }) => {
  const defaultValues = {
    title: '',
    date: [],
    time: []
  };

  // Custom hooks for forms validation from react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }
  } = useForm({ defaultValues });

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  /**
  * Check whether the contact form is submitted
  * If submitted then reset the form values 
  */
  useEffect(() => {
    isSubmitSuccessful && reset(defaultValues)
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input
      type='text'
      placeholder="Title"
      {...register("title", { required: true })}
    />
    {errors.title?.message && <p>Please check the title</p>}

    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>

    <button type="submit">Submit</button>
  </form>
  );
};
