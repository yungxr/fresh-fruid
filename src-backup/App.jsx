import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="glass-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/nostalgia" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
