import React, { useEffect, useState } from "react";

const UseNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes, setNotes]);
  return [notes, setNotes];
};

export default UseNotes;
