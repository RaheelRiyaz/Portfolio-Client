import { useForm } from "react-hook-form";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import { useState } from "react";
import { DatePickerEl } from "../../shared/components/DatePicker";
import { InputEl } from "../../shared/components/Input";
import { TextAreaEl } from "../../shared/components/TextArea";

function AddExp() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleForm(data) {
    setIsLoading(true);
    BASE_SERVICE.Post("experiences", data)
      .then((response) => {
        if (response.status === HttpStatusCode.Ok) alert("exp added");
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form
      className="max-w-sm mx-auto border border-white p-3 rounded-lg"
      onSubmit={handleSubmit(handleForm)}
    >
      <div className="mb-5">
        <DatePickerEl
          placeHolder="From Date"
          {...register("from", {
            required: {
              value: true,
              message: "From date is required",
            },
          })}
        />
        {errors.from && <p className="text-red-500">{errors.from.message}</p>}
      </div>
      <div className="mb-5">
        <DatePickerEl
          placeHolder="To Date"
          {...register("to", {
            required: {
              value: true,
              message: "To date is required",
            },
          })}
        />
        {errors.to && <p className="text-red-500">{errors.to.message}</p>}
      </div>

      <div className="mb-5">
        <InputEl
          placeHolder="Company name"
          {...register("company", {
            required: {
              value: true,
              message: "Cpmpany name is required",
            },
          })}
        />
        {errors.company && (
          <p className="text-red-500">{errors.company.message}</p>
        )}
      </div>
      <div className="mb-5">
        <InputEl
          placeHolder="Designation"
          {...register("designation", {
            required: {
              value: true,
              message: "Designation is required",
            },
          })}
        />
        {errors.designation && (
          <p className="text-red-500">{errors.designation.message}</p>
        )}
      </div>
      <div className="mb-5">
        <TextAreaEl
          placeHolder="Description"
          {...register("description", {
            required: {
              value: true,
              message: "Description is required",
            },
          })}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      {isLoading ? (
        <button
          disabled
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submitting...
        </button>
      ) : (
        <button
          type="click"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      )}
    </form>
  );
}

export default AddExp;
