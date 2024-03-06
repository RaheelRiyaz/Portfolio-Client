import { environment } from "../../../environments/environment.development";

/* eslint-disable react/prop-types */
function SkillCard({ skill }) {
  return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={environment.IMAGE_BASE_PATH+skill?.icon}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {skill?.name}
          </h5>
        </div>
    </div>
  );
}

export default SkillCard;
