import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import SkillSkelton from "../components/SkillSkelton";
function SkillSet() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    BASE_SERVICE.Fetch("skills")
      .then((response) => {
        if (response.status === HttpStatusCode.Ok) {
          setSkills(response?.data?.result);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="ps-5 md:ml-10">
      <Heading title="Skillset" />
      <div className="flex justify-start items-center gap-4 flex-wrap mt-5">
        {loading
          ? Array(10).fill(0).map((_, i) => <SkillSkelton key={i} />)
          : skills.map((_) => <SkillCard key={_.id} skill={_} />)}
      </div>
    </div>
  );
}

export default SkillSet;
