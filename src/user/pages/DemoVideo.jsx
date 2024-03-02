import { useLocation } from "react-router-dom";
import { environment } from "../../../environments/environment.development";
function DemoVideo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get("url");

  return (
    <video
      className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
      controls
      autoPlay={true}
    >
      <source src={environment.IMAGE_BASE_PATH + paramValue} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default DemoVideo;
