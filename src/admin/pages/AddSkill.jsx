import { HttpStatusCode } from "axios";
import { BASE_SERVICE } from "../../services/baseService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputEl } from "../../shared/components/Input";
import { FileEl } from "../../shared/components/File";
import { useForm } from "react-hook-form";

function AddSkill() {
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  function handleForm(data) {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("icon", file);

    BASE_SERVICE.Post("skills", formData)
      .then((res) => {
        if (res.status === HttpStatusCode.Ok)
          if (res.data?.isSuccess) navigateTo("/admin");
      })
      .finally(() => setSubmitting(false));
  }
  return (
    <div className="border border-white rounded-lg p-3 w-[30rem] m-auto mt-3">
      <form className="mx-auto" onSubmit={handleSubmit(handleForm)}>
        <InputEl
          placeHolder="SKill Name"
          {...register("name", {
            required: {
              value: true,
              message: "Skill is required",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <FileEl label="Icon" classes="mt-5" handler={handleChange} />
        {submitting ? (
          <button
            disabled
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adding....
          </button>
        ) : (
          <button
            type="submit"
            disabled={!file}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new skill
          </button>
        )}
        <p className="text-red-500">
          {!file && submitting && "Please Select a icon"}
        </p>
      </form>
    </div>
  );
}

export default AddSkill;
