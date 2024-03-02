/* eslint-disable react/prop-types */
function TechCard({ title }) {
  return (
    <button
      type="button"
      className="text-blue-700 cursor-default border border-blue-700 font-medium rounded-2xl text-sm px-2 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
    >
      {title}
    </button>
  );
}

export default TechCard;
