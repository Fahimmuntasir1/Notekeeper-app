import React, { useState } from "react";

import UseNotes from "../../Hooks/UseNotesHook/UseNotes";
import Pagination from "../Pagination/Pagination";
import Note from "./Note";
import "./Note.css";

const Notes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [notes, setNotes] = UseNotes();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = notes.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="grid grid-cols-3 gap-10 justify-between m-10">
      {currentPosts.map((myNote) => (
        <Note myNote={myNote} key={myNote._id}></Note>
      ))}

      {/* <Pagination
        totalPosts={notes.length}
        postsPerPage={postsPerPage}
        // setCurrentPage={setCurrentPage}
        // currentPage={currentPage}
      ></Pagination> */}
    </div>
  );
};

export default Notes;
