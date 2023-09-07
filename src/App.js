import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { List } from "./Pages/List/List";
import { Hotel } from "./Pages/Hotel/Hotel";
import { Navbar } from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
