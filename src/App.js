import "./App.css";
import NavBar from "./components/NavBar";
import MainBody from "./pages/MainBody";
import Popular from "./pages/Popular";
import Action from "./pages/Action";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Horror from "./pages/Horror";
import More from "./pages/More";
import Search from "./pages/Search";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="popular" element={<Popular />} />
        <Route path="action" element={<Action />} />
        <Route path="horror" element={<Horror />} />
        <Route path="news" element={<Horror />} />
        <Route path="more" element={<More />} />
        <Route path="search" element={<Search />} />
        <Route path="movie-details" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
