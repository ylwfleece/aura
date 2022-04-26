import './App.css';
import Input from './components/Input/Input'

function App() {
  return (
    <div className="App">
      <Input id="Username" value="John.smith@antra.com" className="Hopethisworks"></Input>
      <Input id="Password" value="Password" type="password"></Input>

      <br/>
      <button onClick={()=>console.log(document.getElementById("Username").className)}>test1</button>
      <button onClick={()=>console.log(document.getElementById("Password").value)}>test2</button>
    </div>
  );
}

export default App;