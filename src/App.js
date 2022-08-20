import './assets/css/App.css';
import SideBar from './components/SideBar/SideBar';
import Router from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className='home'>
          <Router></Router>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
