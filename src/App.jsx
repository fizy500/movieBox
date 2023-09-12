import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import Footer from "./components/Footer";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='movie-details' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <Hero /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
