import Banking from './Components/Banking'
import CashCard from './Components/CashCard'
import Payment from './Components/Payment'
import Investment from './Components/Investment';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Payment />
      <Banking />
      <CashCard />
      <Investment />
    </div>
  );
}

export default App;
