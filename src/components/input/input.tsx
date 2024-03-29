"use client";

import { Field, Form } from "formik";

export interface InputProps {
  label?: string;
  type?: string | "text";
  name: string;
  className?: string;
  labelClassName?: string;
  isRequired?: boolean;
  error?: string | null;
  isServerComponent?: boolean;
}

export default function Input({
  label,
  type,
  name,
  className,
  labelClassName,
  isRequired,
  error,
  isServerComponent,
}: InputProps) {
  return (
    <>
      <label className="block">
        <p className={labelClassName}>{label}</p>
        {!isServerComponent ? (
          <Field
            type={type}
            className={`mt-1 p-2 w-full rounded border-2 border-gray-200 ${className}`}
            name={name}
            required={isRequired}
          />
        ) : (
          <input
            type={type}
            className={`mt-1 p-2 w-full rounded border-2 border-gray-200 ${className}`}
            name={name}
            required={isRequired}
          />
        )}
      </label>
      {error && <span className="font-bold text-red-500 flex">{error}</span>}
    </>
  );
}
