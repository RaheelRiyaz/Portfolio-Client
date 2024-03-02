/* eslint-disable react/prop-types */

function SkillCard() {
  return (
    <div className="flex justify-start items-center gap-3 text-white font-bold text-xl h-16 md:w-[300px] w-[150px]">
      <img
      className="h-7 w-7 object-cover rounded-full"
        src="https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj"
        alt="icon"
      />
      <h1>Angular</h1>
    </div>
  );
}

export default SkillCard;
