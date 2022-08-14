import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notes from "../Notes/Notes";

const Home = () => {
  const handleNotes = (e) => {
    const title = e.target.title.value;
    const tag = e.target.tag.value;
    const note = e.target.note.value;
    const data = { title, tag, note };
    const url = `http://localhost:5000/addNotes`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Note Added Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (result) {
          e.target.value = "";
        }
      });
    e.preventDefault();
  };
  const handleCancelBtn = () => {
    console.log("object");
  };
  return (
    <section>
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
            onClick={handleCancelBtn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded shadow mx-5 my-2 cursor-pointer"
            type="submit"
            value="save"
          />
        </div>
      </form>
      <Notes />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Home;
