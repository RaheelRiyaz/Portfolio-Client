import { useForm } from "react-hook-form";
import { DatePickerEl } from "../../shared/components/DatePicker";
import { TextAreaEl } from "../../shared/components/TextArea";
import { InputEl } from "../../shared/components/Input";

function AddExp() {
  const { register, handleSubmit } = useForm();

  function handleForm(data) {
    console.log(data);
    console.log('submit');
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
      </div>
      <div className="mb-5">
        <InputEl
          placeHolder="Designation"
          {...register("designatiob", {
            required: {
              value: true,
              message: "Designation is required",
            },
          })}
        />
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
      </div>
      <button
        type="click"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default AddExp;
