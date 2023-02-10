import { BrowserRouter } from "react-router-dom"
import "./App.css";
import Loyal from "./Loyal";
import Loyal2 from "./Loyal2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Loyal />
      <Loyal2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
