import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Payment Screen</h1>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
