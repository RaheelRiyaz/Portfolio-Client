import { useState } from "react";
import { FileEl } from "../../shared/components/File";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";

function Resume() {
  const [file, setfile] = useState(null);
  // const [isSubmitting, setIsSubmitting] = useState(false)
  function handleFile(e) {
    setfile(e.target.files[0]);
  }
  function handleForm() {
    // setIsSubmitting(true);
    const formData = new FormData();
    formData.append("file", file);
    BASE_SERVICE.Update("resume", formData).then((response) => {
      if (response.status === HttpStatusCode.Ok)
        if (response.data?.isSuccess) alert("Resume Updated");
    })
    // .finally(()=>);
  }
  return (
    <div className="border border-white max-w-lg p-3 rounded-lg">
      <FileEl label="Resume" handler={handleFile} />
      <button className="bg-indigo-400 p-2 rounded-lg" onClick={handleForm}>
        Update resume
      </button>
    </div>
  );
}

export default Resume;
