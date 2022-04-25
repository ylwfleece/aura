import logo from './logo.svg';
import './App.css';
import AuraButton from './components/Button/AuraButton';

function App() {
  return (
    <div className='App'>
      <AuraButton variant='contained'> A button</AuraButton>
      <AuraButton variant='outlined'> Outlined </AuraButton>
    </div>
  );
}

export default App;
