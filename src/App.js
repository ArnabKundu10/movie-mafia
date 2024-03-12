import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MainBody from "./pages/MainBody";
import Popular from "./pages/Popular";
import Comedy from "./pages/Comedy";
import Action from "./pages/Action";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
function App() {
  const [itemDetails, setItemDetails] = useState({});
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<MainBody setitemDetails={setItemDetails} />}
        />
        <Route path="popular" element={<Popular />} />
        <Route path="action" element={<Action />} />
        <Route path="comedy" element={<Comedy />} />
        <Route path="news" element={<Comedy />} />
        <Route
          path="movie-details"
          element={<MovieDetails itemDetails={itemDetails} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
