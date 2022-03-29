import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Pokemon.css";
import PokeList from "./components/PokeList";
import Strong from "./components/Pages/Power/Strong";
import Favorites from "./components/Pages/Favorites";
import Weak from "./components/Pages/Power/Weak";
function App() {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<PokeList/>}/>
            <Route path="/power" element={<Strong/>}/>
            <Route path="/weak" element={<Weak/>}/>
            <Route path="/fav" element={<Favorites/>}/>
          </Routes>
       </Router>
      </main>
    </div>
  );
}

export default App;
