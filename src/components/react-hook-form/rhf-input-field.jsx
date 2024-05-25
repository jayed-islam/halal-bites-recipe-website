/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function RHFInputField({
  label,
  name,
  helpText,
  type,
  rules,
  ...other
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            {...field}
            onChange={(event) => {
              field.onChange(event.target.value);
            }}
            type={type}
            id={name}
            name={name}
            className={` mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700  border px-5 py-3 shadow ${
              error && "border-red-500"
            }`}
            {...other}
          />
          {error && (
            <p className="mt-1 text-xs text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
