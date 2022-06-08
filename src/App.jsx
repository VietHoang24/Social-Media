import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import { Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
