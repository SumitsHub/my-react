import LoadingCounter from "./components/LoadingCounter/LoadingCounter";
import './App.scss';
import FadeLongText from "./components/FadeLongText/FadeLongText";
import StickyHeader from "./components/StickyHeader/StickyHeader";

function App() {
  return (
    <div className="app">
      <h2 className="app-header">Welcome to the store!</h2>
      <hr/>
      {/* <LoadingCounter /> */}
      {/* <FadeLongText /> */}
      <StickyHeader />
    </div>
  );
}

export default App;
