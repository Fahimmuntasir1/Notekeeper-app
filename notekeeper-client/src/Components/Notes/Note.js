import React from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
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

  /* update notes */
  const handleUpdateNotes = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const tag = e.target.tag.value;
    const note = e.target.note.value;
    const data = { title, tag, note };
    const url = `http://localhost:5000/update${_id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Note Updated Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const remaining = notes;
        setNotes(remaining);
      });
  };

  /*  =================== Click in the Checkbox ====================  */
  const Checkbox = (CheckID) => {
    fetch(`http://localhost:5000/Checkbox/${CheckID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = notes.filter((notes) => notes._id !== CheckID);
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
          <label for={_id} className="cursor-pointer hidden icon">
            {" "}
            <AiOutlineEdit />{" "}
          </label>
          <label>
            <input
              data-tip="Pin"
              className="cursor-pointer hidden icon tooltip"
              onClick={() => Checkbox(_id)}
              type="checkbox"
              /* checked={taskData.Checkbox && "checked"}
              disabled={taskData?.Checkbox && "disabled"} */
            />
          </label>
        </div>
      </div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={_id} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label for={_id} class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form onSubmit={handleUpdateNotes} className="flex flex-col ">
            <input
              required
              name="title"
              className="outline-none m-3"
              defaultValue={title}
              type="text"
            />
            <input
              required
              name="tag"
              className="outline-none m-3"
              defaultValue={tag}
              type="text"
            />
            <textarea
              name="note"
              className="outline-none m-3 resize-none"
              defaultValue={note}
              type="text"
            />
            <div className="flex justify-end border-t">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded shadow mx-5 my-2 cursor-pointer"
                type="submit"
                value="Update"
              />
            </div>
          </form>
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
