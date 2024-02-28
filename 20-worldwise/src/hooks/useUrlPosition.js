import { useSearchParams } from "react-router-dom";
export function useUrlPosition() {
  // read location from URL
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
// export { useUrlPosition };
