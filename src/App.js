import "./App.css";

function App() {
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      albumArt: "url_to_album_art_1",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      albumArt: "url_to_album_art_2",
    },
    // Add more songs here...
  ];

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Dynamic Song List</h1>
        <input
          type="text"
          placeholder="Search for songs..."
          className="p-2 rounded-md"
        />
      </header>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={song.albumArt}
              alt={`${song.title} album art`}
              className="w-full h-32 object-cover rounded-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{song.title}</h2>
            <p className="text-gray-600">{song.artist}</p>
            <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Play
            </button>
          </div>
        ))}
      </main>

      <footer className="bg-gray-600 text-white p-4 text-center">
        © 2024 My Music App
      </footer>
    </div>
  );
}

export default App;
