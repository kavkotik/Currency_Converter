import "./App.css";
import DefaultRates from "./components/DefaultRates";
import ExchangeZone from "./components/ExchangeZone";

function App() {
  return (
    <div className="main-wraper">
      <header>
        <div className="head-title">
          Currency <br /> Converter
        </div>
        <DefaultRates />
      </header>
      <h2 className="main-title">
        Please enter the amount and select currencies
      </h2>
      <ExchangeZone />
    </div>
  );
}

export default App;
