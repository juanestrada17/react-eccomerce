import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter} from 'react-router-dom';
import { Root } from './Root';

//Se necesita el Router para que se pueda hacer 
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Root/>
      </BrowserRouter>
    </>
  );
}

export default App;
