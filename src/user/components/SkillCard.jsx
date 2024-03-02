/* eslint-disable react/prop-types */

import { environment } from "../../../environments/environment.development";

function SkillCard({ skill }) {
  return (
    <div className="flex justify-start items-center gap-3 text-white font-bold text-sm md:text-xl h-16 md:w-[300px] w-[150px]">
      <img
        className="h-7 w-7 object-cover rounded-full"
        src={environment.IMAGE_BASE_PATH + skill?.icon}
        alt="icon"
      />
      <h1>{skill?.name}</h1>
    </div>
  );
}

export default SkillCard;
