import React from "react";

const Note = ({ myNote }) => {
  const { title, tag, note } = myNote;
  return (
    <div className="w-80 p-5 rounded border-gray-700">
      <h2 className="text-xl">{title}</h2>
      <i className="text-gray-400">{tag}</i>
      <p>{note}</p>
    </div>
  );
};

export default Note;
