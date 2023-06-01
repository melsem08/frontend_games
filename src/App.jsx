import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReviewsList } from "./components/ReviewsList";
import { SingleReview } from "./components/SingleReview";
import { NavBar } from "./components/NavBar";
import { SignIn } from "./components/SignIn";
import { useState, createContext } from "react";
import { Categories } from "./components/Categories";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Header />
        <NavBar setUser={setUser} />
        <Routes>
          <Route path="/" element={<ReviewsList />} />
          <Route path="/:review_id" element={<SingleReview />} />
          <Route path="/sign_in" element={<SignIn setUser={setUser} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export { App, UserContext };
