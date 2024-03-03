export default function GetToken() {
  const token = localStorage.getItem("Portfolio-Token");
  return token ? token : "";
}
