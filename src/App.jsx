import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReviewsList } from "./components/ReviewsList";
import { SingleReview } from "./components/SingleReview";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ReviewsList />} />
        <Route path="/:review_id" element={<SingleReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
