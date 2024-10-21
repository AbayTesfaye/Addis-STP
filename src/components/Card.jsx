function Card() {
  const sampleSong = {
    title: "Song Title",
    artist: "Artist Name",
    albumArt: "logo192.png",
  };

  return (
    <div className="max-full rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="flex items-center">
        {/* Album Art */}
        <img
          className="w-24 h-24 rounded mr-4"
          src={sampleSong.albumArt}
          alt="Album Art"
        />
        {/* Song Details */}
        <div className="flex-1">
          <div className="font-bold text-xl mb-2">{sampleSong.title}</div>
          <p className="text-gray-700 text-base">{sampleSong.artist}</p>
        </div>
        {/* Play Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log(`Playing: ${sampleSong.title}`)}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Card;
