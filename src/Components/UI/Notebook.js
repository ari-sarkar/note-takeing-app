import React from "react";
import "../../Styles/UI/Notebook.scss";
import FilterLogic from "../UILogic/FilterLogic";
const Notebook = () => {
  return (
    <section>
        <h1>NoteBook</h1>
      <div className="notebook-container">
        <div className="left-side-wrapper">
          <div className="write-notes">
            <form>
              <label>Title</label>
              <input></input>
              <br />
              <label>Write Notes</label>
              <br />
              <textarea></textarea>
              <button>Add Note</button>
            </form>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="filter-notes">
            <h5>Filter By</h5>
            <div className="filter-logic-container">
                <FilterLogic />
            </div>
          </div>
          <div className="display-notes">
              <h2>Notes</h2>
              <div className="display-notes-logic-container">

              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notebook;
