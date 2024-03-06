import { HttpStatusCode } from "axios";
import { BASE_SERVICE } from "../../services/baseService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSkill() {
  const [submitting, setSubmitting] = useState(false);
  const navigateTo = useNavigate();

  function handleForm(e) {
    setSubmitting(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    BASE_SERVICE.Post("skills", formData)
      .then((res) => {
        if (res.status === HttpStatusCode.Ok)
          if (res.data?.isSuccess) navigateTo("/admin");
      })
      .finally(() => setSubmitting(false));
  }
  return (
    <div className="border border-white rounded-lg p-3 w-[30rem] m-auto mt-3">
      <form className="mx-auto" onSubmit={(e) => handleForm(e)}>
        <div className="mb-5">
          <label
            htmlFor="skill"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Skill Name
          </label>
          <input
            type="text"
            id="skill"
            name="name"
            placeholder="Skill"
            className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="icon"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Icon
          </label>
          <input
            type="file"
            id="icon"
            name="icon"
            className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
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
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new skill
          </button>
        )}
      </form>
    </div>
  );
}

export default AddSkill;
