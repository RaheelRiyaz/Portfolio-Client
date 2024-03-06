import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../context/Context";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
function Techs() {
  const { id } = useParams();
  const { techs } = useContext(context);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    setSubmitting(true);
    const skill = {
      projectId: id,
      name,
    };

    BASE_SERVICE.Post("technologies", skill)
      .then((res) => {
        if (res.status === HttpStatusCode.Ok) {
          if (!res?.data?.isSuccess) {
            alert("");
            return;
          }
        }
      })
      .finally(() => setSubmitting(false));
  }
  return (
    <main>
      <button
        className="bg-white rounded-lg p-2 mb-2"
        onClick={() => setOpenModal(!openModal)}
      >
        Add tech +
      </button>
      <div className="flex flex-start items-center gap-2 flex-wrap">
        {techs.map((_) => (
          <button
            key={_}
            className="border border-white p-2 rounded-lg text-white"
          >
            {_}
          </button>
        ))}
      </div>

      {openModal && (
        <form
          className="max-w-sm mx-auto border-white border p-5 rounded-lg"
          onSubmit={handleForm}
        >
          <button
            className="h-5 w-5 rounded-full flex justify-center items-center p-5 float-right"
            onClick={() => setOpenModal(!openModal)}
          >
            <i className="text-white text-right block text-xl border fa-solid fa-xmark"></i>
          </button>
          <div className="mb-5">
            <label
              htmlFor="skill"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skill Name
            </label>
            <input
              type="text"
              id="skill"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          {!submitting ? (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          ) : (
            <button
              disabled
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submitting...
            </button>
          )}
        </form>
      )}
    </main>
  );
}

export default Techs;
