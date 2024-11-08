import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Landing from "./pages/home";
import Contact from "./pages/contact";
import Academy from "./pages/academy";
import Club from "./pages/clubs";
import Conectworking from "./pages/coNetWorKing";
import Mint from "./pages/mint";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Landing} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/academy" Component={Academy} />
        <Route path="/club" Component={Club} />
        <Route path="/conetworking" Component={Conectworking} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
