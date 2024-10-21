import { useState } from "react";

function Card({ songs, setSongs }) {
  function handleDelete(id) {
    const updatedSongs = songs.filter((song, index) => index !== id);
    setSongs(updatedSongs);
  }

  function handleEdit() {
    console.log("handle Edit");
  }

  return (
    <div className="max-full rounded overflow-hidden shadow-lg bg-white p-4">
      {/* Loop through each song */}
      {songs.map((song, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center mb-4 bg-gray-100 p-4 rounded"
          >
            {/* Album Art */}
            <img
              className="w-24 h-24 rounded mr-4"
              src={song.albumArt}
              alt="Album Art"
            />
            {/* Song Details */}
            <div className="flex-1">
              <div className="font-bold text-xl mb-2">
                {song.title || "Untitled"}
              </div>
              <p className="text-gray-700 text-base">{song.artist}</p>
            </div>

            {/* Edit Button */}
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleEdit}
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
