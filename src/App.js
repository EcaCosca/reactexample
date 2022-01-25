import logo from './logo.svg';
import './App.css';
import Student from './Student';
import SuperButton from './SuperButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Exercise 1</h2>
        <Student name="John Doe" />
        
        <h2>Exercise 2</h2>
        <SuperButton atext="Click Me!" alertText="Hey, stop clicking here already" />

        <h2>Exercise 3</h2>

      </header>
    </div>
  );
}

export default App;
