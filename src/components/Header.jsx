function header() {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Song List</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search for songs..."
          className="p-2 rounded-xl"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
          Upload
        </button>
      </div>
    </header>
  );
}

export default header;
