import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReviewsList } from "./components/ReviewsList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
