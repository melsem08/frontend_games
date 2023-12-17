import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReviewsList } from "./components/ReviewsList";
import { SingleReview } from "./components/SingleReview";
import { NavBar } from "./components/NavBar";
import { SignIn } from "./components/SignIn";
import { useState, createContext } from "react";
import { Categories } from "./components/Categories";
import { CategoryReviews } from "./components/CategoryReviews";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Header />
        <NavBar setUser={setUser} />
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/sign_in" element={<SignIn setUser={setUser} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/:category_name/reviews" element={<CategoryReviews />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export { App, UserContext };
