import Heading from "../components/Heading";
import ExperienceCard from "../components/ExperienceCard";
import { useEffect, useState } from "react";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import ExpSkelton from "../components/ExpSkelton";

function Experiences() {
  const [loading, setLoading] = useState(true);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    BASE_SERVICE.Fetch("experiences")
      .then((response) => {
        if (response.status === HttpStatusCode.Ok)
          setExperiences(response?.data?.result);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="ps-5 md:ml-10 my-5">
      <Heading title="Experiences" />
      <div className="flex justify-start flex-wrap gap-4 items-center">
        {loading
          ? [1, 2, 4].map((_, i) => <ExpSkelton key={i} />)
          : experiences.map((_) => (
              <ExperienceCard key={_.id} experience={_} />
            ))}
      </div>
    </div>
  );
}

export default Experiences;
