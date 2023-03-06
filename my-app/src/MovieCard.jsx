import React from "react";

export default function MovieCard({ movie }) {
  const link = `https://www.google.com/search?q=${movie.Title}`;
  return (
    <div
      className="w-[310px] h-[460px]rounded-3xl relative cursor-pointer border-rounded-3xl border-black  hover:opacity-80 hover:scale-105"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        className="w-full rounded-3xl"
      />
      <div className="flex flex-col absolute bg-black text-white w-full bottom-0 rounded-bl-3xl rounded-br-3xl h-[100px] text-center items-center justify-center px-6 font-bold text-lg">
        {movie.Title}
        <p className="text-gray-300">{movie.Year}</p>
      </div>
    </div>
  );
}
