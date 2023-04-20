import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Viashwas' messageCount={10} isLoggedIn={false}/>
      <Button handleClick={event => console.log('Clicked: ', event)}/>
    </div>
  );
}

export default App;
