import React, { useEffect, useState } from "react";
import Note from "./Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-10 justify-between m-10">
      {notes.map((myNote) => (
        <Note myNote={myNote} key={myNote._id}></Note>
      ))}
    </div>
  );
};

export default Notes;
