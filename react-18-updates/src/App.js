import './App.css';
import UseDeferredValue from './components/UseDeferredValue/UseDeferredValue';
import UseTransition from './components/UseTransition/UseTransition';

function App() {
  return (
    <div className="App">
      <h2>React 18 Updates</h2>
      <hr/>
      {/* <UseTransition /> */}
      <UseDeferredValue />
    </div>
  );
}

export default App;
