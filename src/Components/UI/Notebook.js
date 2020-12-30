import React, { useState } from "react";
import "../../Styles/UI/Notebook.scss";
import EachNote from "../UILogic/EachNote";
const Notebook = () => {
  const [title, settitle] = useState(null);
  const [note, setnote] = useState(null);
  const [isClicked, setisClicked] = useState(false);
  const AddNote = e => {
    e.preventDefault();
    setisClicked(true);
  };
  //Filter Logic
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
  //console.log(month, date, year, hour, minute, second);
  return (
    <section>
      <h1>NoteBook</h1>
      <div className="notebook-container">
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
        <div className="right-side-wrapper">
          <div className="display-notes">
            <h2>Notes</h2>
            <div className="display-notes-logic-container">
              <EachNote
                title={isClicked ? title : ""}
                note={isClicked ? note : ""}
                setisClicked={setisClicked}
                month={month}
                date={date}
                year={year}
                hour={hour}
                minute={minute}
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
