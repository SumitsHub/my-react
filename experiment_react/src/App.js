import "./App.css";
import DistanceCalculator from "./components/DistanceCalculator/DistanceCalculator";
import GoogleMapView from "./components/GoogleApiWrapper/GoogleApiWrapper";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <div className="App">
      {/* <GoogleMapView /> */}
      {/* <InfiniteScroll /> */}
      <DistanceCalculator />
    </div>
  );
}

export default App;
