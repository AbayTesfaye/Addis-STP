import { useState } from "react";

// Header component
function Header({ songs, setSongs }) {
  const [formVisible, setFormVisible] = useState(false); // Track form visibility
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    albumArt: "",
  }); // Track new song details

  const toggleForm = () => {
    setFormVisible(!formVisible); // Toggle form visibility
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    if (newSong.title && newSong.artist && newSong.albumArt) {
      setNewSong({ title: "", artist: "", albumArt: "" }); // Reset form
      setSongs(newSong);
      setFormVisible(false); // Hide form after adding song
    }
  };
  console.log(songs);
  return (
    <header className="bg-gray-600 text-white p-4 flex flex-col justify-between items-center">
      <h1 className="text-xl font-bold">Song List</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search for songs..."
          className="p-2 rounded-xl text-black"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          onClick={toggleForm}
        >
          {formVisible ? "Cancel" : "Add Song"}
        </button>
      </div>

      {/* Form to add a new song */}
      {formVisible && (
        <form onSubmit={handleAddSong} className="mt-4 w-full">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="title"
              value={newSong.title}
              onChange={handleInputChange}
              placeholder="Song Title"
              className="p-2 rounded border text-black"
            />
            <input
              type="text"
              name="artist"
              value={newSong.artist}
              onChange={handleInputChange}
              placeholder="Artist Name"
              className="p-2 rounded border text-black"
            />
            <input
              type="text"
              name="albumArt"
              value={newSong.albumArt}
              onChange={handleInputChange}
              placeholder="Album Art URL"
              className="p-2 rounded border text-black"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Add Song
            </button>
          </div>
        </form>
      )}
    </header>
  );
}

export default Header;
