import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard";

function SkillSet() {
  return (
    <div className="ps-5">
      <Heading title="Skillset" />
      <div className="flex justify-start items-center gap-4 flex-wrap mt-5">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}

export default SkillSet;
