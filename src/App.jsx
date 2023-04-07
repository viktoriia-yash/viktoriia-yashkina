import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import Weather_js from "./pages/Portfolio/projects/weatherJs";
import Sketch_js from "./pages/Portfolio/projects/sketchJs";
import Rps_js from "./pages/Portfolio/projects/rpsJs";
import Calculator_js from "./pages/Portfolio/projects/calculatorJs";
import Weather_react from "./pages/Portfolio/projects/weatherReact";
import Dictionary_react from "./pages/Portfolio/projects/dictionaryReact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />

          <Route path="/weather_js" element={<Weather_js />} />
          <Route path="/sketch_js" element={<Sketch_js />} />
          <Route path="/rps_js" element={<Rps_js />} />
          <Route path="/calculator_js" element={<Calculator_js />} />
          <Route path="/weather_react" element={<Weather_react />} />
          <Route path="/dictionary_react" element={<Dictionary_react />} />

          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
