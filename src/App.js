import './assets/css/App.css';
import SideBar from './components/SideBar/SideBar';
import Router from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className='home'>
          <Main></Main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
