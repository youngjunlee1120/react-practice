import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router basename="/react-practice">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
