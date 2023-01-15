import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Team from "./components/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./components/Events";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Register/>
              <Events/>
              <Team/>
            </>
          }
        ></Route>
        <Route path="info" element={<Register />}></Route>
        <Route path="team" element={<Team />}></Route>
        <Route path="highlights" element={<Events />}></Route>
      </Routes>
    </Router>
    // <>
    // <Navbar/>
    // <Intro/>
    // <Register/>
    // {/* <Location/> */}
    // <Events/>
    // <Team/>
    // </>
  );
}

export default App;
