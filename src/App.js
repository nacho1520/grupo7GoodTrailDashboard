import './App.css';
import Panels from './components/Panels';
import TotalProductsByCategory from './components/TotalProductsByCategory';

function App() {
  return (
    <div className="App">
      <h1>Welcome to GoodTrail Dashboard</h1>
      <Panels />
      <TotalProductsByCategory />
    </div>
  );
}

export default App;
