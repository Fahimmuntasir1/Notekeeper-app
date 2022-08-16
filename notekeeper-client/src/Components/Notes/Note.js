import React from "react";
import { AiFillDelete, AiFillPushpin } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import UseNotes from "../../Hooks/UseNotesHook/UseNotes";

const Note = ({ myNote }) => {
  const { title, tag, note, _id } = myNote;
  const [notes, setNotes] = UseNotes();
  const handleDeleteNote = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.warn("Notes Deleted !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const remaining = notes.filter((notes) => notes._id !== id);
        setNotes(remaining);
      });
  };
  return (
    <div>
      <div key={_id} className="w-80 p-5 rounded-xl border note">
        <div>
          <h2 className="text-xl">{title}</h2>
          <i className="text-gray-400 text-sm">{tag}</i>
          <p>{note}</p>
        </div>
        <div className="flex justify-between duration-100 mt-2 pt-2">
          <AiFillDelete
            onClick={() => handleDeleteNote(_id)}
            size={20}
            className="cursor-pointer hidden icon"
          />
          <AiFillPushpin size={20} className="cursor-pointer hidden icon" />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Note;