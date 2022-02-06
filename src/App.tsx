import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bulma/css/bulma.css";

import Blog from "./pages/Blog";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
