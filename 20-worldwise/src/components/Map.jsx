import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  // programmatic navigation
  const navigate = useNavigate();
  // read location from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat},{lng}
      </h1>
      {/* updates the query string */}
      <button onClick={() => setSearchParams({ lat: 22, lng: 45 })}>
        Change Pos
      </button>
    </div>
  );
}

export default Map;
