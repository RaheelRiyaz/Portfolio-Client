import { InputEl } from "../../shared/components/Input";
import { FileEl } from "../../shared/components/File";
import { TextAreaEl } from "../../shared/components/TextArea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";

function AddProject() {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  function handleForm(data) {
    if (!thumbnail || !videoFile) {
      if (!thumbnail) {
        setError("image", {
          type: "manual",
          message: "Please choose a thumbnail",
        });
      }

      if (!thumbnail) {
        setError("video", {
          type: "manual",
          message: "Please choose a demo video",
        });
      }
      return;
    }
    setSubmitting(true);

    const formData = new FormData();
    formData.append("demoVideo", videoFile);
    formData.append("file", thumbnail);
    for (let key in data) {
      formData.append(key, data[key]);
    }

    BASE_SERVICE.Post("projects", formData)
      .then((response) => {
        if (response.status === HttpStatusCode.Ok)
          if (response.data.isSuccess) alert("Project added");
      })
      .finally(() => setSubmitting(false));
  }

  function handleVideoFile(e) {
    clearErrors("video");

    if (e.target.files[0] && !e.target.files[0].type.includes("video")) {
      setError("video", {
        type: "manual",
        message: "Please select a video file",
      });
      return;
    }
    setVideoFile(e.target.files[0]);
  }

  function handleFile(e) {
    clearErrors("image");

    if (e.target.files[0] && !e.target.files[0].type.includes("image")) {
      setError("image", {
        type: "manual",
        message: "Please select a image file",
      });
      return;
    }
    setThumbnail(e.target.files[0]);
  }

  return (
    <form
      className="max-w-xl border border-white p-5 rounded-lg flex flex-col gap-3 m-auto"
      onSubmit={handleSubmit(handleForm)}
    >
      <h1 className="text-center text-white font-bold text-2xl underline">
        Add New Project
      </h1>
      <InputEl
        placeHolder="Project Name"
        {...register("name", {
          required: {
            value: true,
            message: "Project Name is required",
          },
        })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <InputEl placeHolder="Github Link (Optional)" {...register("liveLink")} />
      <InputEl placeHolder="Live Link (Optional)" {...register("githubLink")} />
      <TextAreaEl
        placeHolder="Description"
        {...register("description", {
          required: {
            value: true,
            message: "Project description is required",
          },
        })}
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      <FileEl label="Demo Video" handler={handleVideoFile} />
      {errors.video && <p className="text-red-500">{errors.video.message}</p>}

      <FileEl label="Thumbnail" handler={handleFile} />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}

      {submitting ? (
        <button
          disabled
          className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
        >
          Adding....
        </button>
      ) : (
        <button
          //   disabled={!videoFile && !thumbnail}
          className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
        >
          Add
        </button>
      )}
    </form>
  );
}

export default AddProject;
