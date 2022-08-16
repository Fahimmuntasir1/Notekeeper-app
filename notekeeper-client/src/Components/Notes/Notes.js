import React, { useState } from "react";

import UseNotes from "../../Hooks/UseNotesHook/UseNotes";
import Pagination from "../Pagination/Pagination";
import Note from "./Note";
import "./Note.css";

const Notes = () => {
  const [notes, setNotes] = UseNotes();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  // Get current posts
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = notes.slice(firstPostIndex, lastPostIndex);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section>
      <div className="grid grid-cols-3 gap-10 justify-between m-10">
        {currentPosts.map((myNote) => (
          <Note myNote={myNote} key={myNote._id}></Note>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={notes.length}
        paginate={paginate}
      ></Pagination>
    </section>
  );
};

export default Notes;
