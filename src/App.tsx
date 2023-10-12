import "./App.css";
import Layout from "./pages/Layout/Layout";
import ScrollableProjects from "./pages/Projects/ScrollableProjects/ScrollableProjects";
import About from "./pages/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/projects" element={<ScrollableProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ScrollableProjects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
