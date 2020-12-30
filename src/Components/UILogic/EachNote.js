import React, { useEffect } from "react";
import "../../Styles/UILogic/EachNote.scss";
import FilterLogic from "../UILogic/FilterLogic";
const EachNote = ({
  title,
  note,
  settitle,
  setnote,
  setisClicked,
  date,
  month,
  year,
  hour,
  minute,
}) => {
  console.log(date, month, year, hour, minute);
  useEffect(() => {
    if (note) {
      setisClicked(false);
      ///logic
      const notes = document.querySelector(".note-list");
      const lists = document.createElement("li");
      lists.classList.add("note");
      lists.innerHTML = `<div contentEditable="true"><b>${title}:</b> ${note}</div>`;
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("delete-button");
      buttonDelete.innerText = "Del";
      buttonDelete.addEventListener("click", () => {
        //lists.innerHTML = "none";
        lists.remove();
      });
      lists.appendChild(buttonDelete);
      notes.appendChild(lists);
      notes.value = "";
      console.log(notes.childNodes);
      settitle("");
      setnote("");
    }
  }, [
    setisClicked,
    note,
    title,
    date,
    month,
    year,
    hour,
    minute,
    setnote,
    settitle,
  ]);

  return (
    <div className="filter-eachnote-container">
      <div className="filter-notes">
        <h5>Filter By</h5>
        <div className="filter-logic-container">
          <FilterLogic />
        </div>
      </div>
      <ul className="note-list"></ul>
    </div>
  );
};

export default EachNote;
