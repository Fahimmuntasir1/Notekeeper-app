import React from "react";

const Home = () => {
  const handleNotes = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const tag = e.target.tag.value;
    const note = e.target.note.value;
  };
  return (
    <form
      onSubmit={handleNotes}
      className="flex flex-col w-3/6 border mx-auto mt-5 shadow-lg rounded"
    >
      <input
        required
        name="title"
        className="outline-none m-3"
        placeholder="Title"
        type="text"
      />
      <input
        required
        name="tag"
        className="outline-none m-3"
        placeholder="Tag name"
        type="text"
      />
      <input
        required
        name="note"
        className="outline-none m-3"
        placeholder="Take a note..."
        type="text"
      />
      <div className="flex justify-end border-t">
        <input
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow my-2 cursor-pointer"
          type="button"
          value="cancel"
        />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded shadow mx-5 my-2 cursor-pointer"
          type="submit"
          value="save"
        />
      </div>
    </form>
  );
};

export default Home;
