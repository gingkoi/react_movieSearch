import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=dd6d3597";

function App() {
  useEffect(() => {
    searchMovie("Superman");
  }, []);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const movie1 = {
    Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    Year: "2016",
    imdbID: "tt18689424",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  };

  return (
    <div className="flex flex-col justify-center mx-10 sm:mx-32">
      {/* navbar */}
      <NavBar />
      {/* SearchBar */}
      <div className="flex justify-between py-2 px-10 items-center w-full sm:w-[90%] mx-auto rounded-xl sm:my-5 bg-zinc-800">
        <input
          className="bg-zinc-800 text-xl sm:text-4xl w-full mr-5 py-5 sm:py-7 px-5 text-white focus:outline-none"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={Search}
          className="w-12 cursor-pointer grow"
          onClick={() => searchMovie(searchTerm)}
        ></img>
      </div>
      {/* movies */}
      <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 gap-6 justify-center mt-10 mx-auto">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
