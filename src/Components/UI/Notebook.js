import React, { useState } from "react";
import "../../Styles/UI/Notebook.scss";
import EachNote from "../UILogic/DisplayEachNote";
const Notebook = () => {
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [isClicked, setisClicked] = useState(false);
  const AddNote = e => {
    e.preventDefault();
    setisClicked(true);
  };
  return (
    <section>
      <h1>NoteBook</h1>
      <div className="notebook-container">
        {/* Take Input From User Section */}
        <div className="left-side-wrapper">
          <div className="write-notes">
            <form>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={e => settitle(e.target.value)}
              ></input>
              <br />
              <label>Write Notes</label>
              <br />
              <textarea
                type="text"
                onChange={e => setnote(e.target.value)}
                value={note}
              ></textarea>
              <button type="submit" onClick={AddNote}>
                Add Note
              </button>
            </form>
          </div>
        </div>
        {/* Display notes Section */}
        <div className="right-side-wrapper">
          <div className="display-notes">
            <h2>Notes</h2>
            <div className="display-notes-logic-container">
              <EachNote
                title={isClicked ? title : ""}
                note={isClicked ? note : ""}
                setisClicked={setisClicked}
                settitle={settitle}
                setnote={setnote}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notebook;
