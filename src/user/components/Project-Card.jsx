import TechCard from "../components/TechCard";
function ProjectCard() {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://bzfitvtpktzyqawobdbu.supabase.co/storage/v1/object/public/portfolio-bucket/project-images/music-player.jpg"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-lg title-font font-medium text-gray-100 mb-1">
            Mood Relaxer
          </h2>
          <h1 className="title-font text-lg font-medium mt-3 text-gray-900 mb-3 flex flex-wrap justify-start items-center gap-1">
            <TechCard title="HTML" />
            <TechCard title="CSS" />
            <TechCard title="TAILWIND" />
            <TechCard title="JAVASCRIPT" />
            <TechCard title="JAVASCRIPT" />
            <TechCard title="JAVASCRIPT" />
            <TechCard title="C#" />
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Watch demo
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-800 gap-1 hover:text-gray-900 cursor-pointer mr-3 flex justify-center items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm p-3 py-4 rounded-2xl h-6 bg-gray-200 hover:bg-gray-300">
              <i className="fa-brands fa-github"></i> Github
            </span>
            <span className="inline-flex items-center leading-none text-sm bg-gray-700 hover:bg-gray-800 cursor-pointer p-2 rounded-2xl px-4 text-white">
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
