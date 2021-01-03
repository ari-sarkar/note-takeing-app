import React, { useState } from "react";
import "../../Styles/UI/Notebook.scss";
import EachNote from "../UILogic/DisplayEachNote";
const Notebook = () => {
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [isClicked, setisClicked] = useState(false);
  const [dateTime, setDateTime] = useState("0000-0000-00");
  const AddNote = e => {
    //e.preventDefault();
    let arr = []
    if (localStorage.getItem('data')) {
      let dataArr = JSON.parse(localStorage.getItem('data'))
      if (dataArr) dataArr.push({title: title, note: note, timestamp: dateTime})
      localStorage.setItem('data', JSON.stringify(dataArr))
    } else {
      arr.push({title: title, note: note, timestamp: dateTime})
      localStorage.setItem('data', JSON.stringify(arr))
    }
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
              <input type="date" value={dateTime} onChange={e => setDateTime(e.target.value)}></input>
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
