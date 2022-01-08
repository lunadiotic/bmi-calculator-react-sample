import logo from './logo.svg';
import './App.css';

import Bmi from './components/Bmi';

function App() {
  return (
    <div className="App">
      <div className="row text-center">
          <div className="col-lg-6 offset-lg-3">
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default App;
