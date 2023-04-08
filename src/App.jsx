import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import WeatherJs from "./pages/Portfolio/projects/weatherJs";
import SketchJs from "./pages/Portfolio/projects/sketchJs";
import RpsJs from "./pages/Portfolio/projects/rpsJs";
import CalculatorJs from "./pages/Portfolio/projects/calculatorJs";
import WeatherReact from "./pages/Portfolio/projects/weatherReact";
import DictionaryReact from "./pages/Portfolio/projects/dictionaryReact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />

          <Route path="/weather_js" element={<WeatherJs />} />
          <Route path="/sketch_js" element={<SketchJs />} />
          <Route path="/rps_js" element={<RpsJs />} />
          <Route path="/calculator_js" element={<CalculatorJs />} />
          <Route path="/weather_react" element={<WeatherReact />} />
          <Route path="/dictionary_react" element={<DictionaryReact />} />

          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
