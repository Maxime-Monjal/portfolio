import "./App.css";
import Footer from "./components/Footer/Footer";
import Formation from "./components/Formation/Formation";
import Home from "./components/Home/Home";
import Projets from "./components/Projets/Projets";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Home />
      <Skills />
      <Projets />
      <Formation />
      <Footer />
    </div>
  );
}

export default App;
