import React from "react";
import { AiFillDelete, AiFillPushpin } from "react-icons/ai";
import "./Note.css";

const Note = ({ myNote }) => {
  const { title, tag, note, _id } = myNote;

  const handleDeleteNote = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("done");
      });
  };
  return (
    <div className="w-80 p-5 rounded-xl border note">
      <h2 className="text-xl">{title}</h2>
      <i className="text-gray-400 text-sm">{tag}</i>
      <p>{note}</p>
      <div className="flex justify-between duration-100 mt-2 pt-2">
        <AiFillDelete
          onClick={() => handleDeleteNote(_id)}
          size={20}
          className="cursor-pointer hidden icon"
        />
        <AiFillPushpin size={20} className="cursor-pointer hidden icon" />
      </div>
    </div>
  );
};

export default Note;
