import { forwardRef } from "react";

/* eslint-disable react/prop-types */
function Input({ type = "text", placeHolder, ...props }, ref) {
  return (
    <input
      id="userName"
      type={type}
      ref={ref}
      placeholder={placeHolder}
      {...props}
      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
    />
  );
}

export const InputEl = forwardRef(Input);
