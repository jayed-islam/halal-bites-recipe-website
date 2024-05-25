/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function RHFSelectField({
  label,
  name,
  helpText,
  options,
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
          <div className="relative">
            <select
              {...field}
              id={name}
              name={name}
              className={`mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 border px-5 py-3 shadow appearance-none ${
                error && "border-red-500"
              }`}
              {...other}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="absolute right-3 top-5" />
          </div>
          {error && (
            <p className="mt-1 text-xs text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
