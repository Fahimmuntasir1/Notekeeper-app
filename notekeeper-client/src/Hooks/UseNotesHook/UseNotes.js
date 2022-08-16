import React, { useEffect, useState } from "react";

const UseNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://young-reaches-50482.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes, setNotes]);
  return [notes, setNotes];
};

export default UseNotes;
