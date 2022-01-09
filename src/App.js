import logo from './logo.svg';
import './App.css';

import Bmi from './components/Bmi';

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center">
          <div className="col-lg-6">
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default App;
