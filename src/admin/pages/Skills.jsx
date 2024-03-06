import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";
import Spinner from "../components/Spinner";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import { NavLink } from "react-router-dom";
function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BASE_SERVICE.Fetch("skills")
      .then((res) => {
        if (res.status === HttpStatusCode.Ok) {
          setSkills(res.data?.result);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  return (
    <main>
      <NavLink
        to={"add"}
        className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg"
      >
        Add Skill +
      </NavLink>
      <div className="flex justify-start items-center gap-3 flex-wrap mt-3">
        {skills.map((_) => (
          <SkillCard key={_.id} skill={_} />
        ))}
      </div>
    </main>
  );
}

export default Skills;
