import { forwardRef, memo } from "react";

/* eslint-disable react/prop-types */
function File({ label, classes, handler, ...props }, ref) {
  return (
    <div className={classes}>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="file"
        ref={ref}
        id={`file_input_${ref}`}
        {...props}
        onChange={handler}
      />

      <label
        className="block mb-2 text-sm font-medium text-white dark:text-white"
        htmlFor={`file_input_${ref}`}
      >
        {label}
      </label>
    </div>
  );
}

export const FileEl = memo(forwardRef(File));
