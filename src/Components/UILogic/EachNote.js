import React, { useEffect, useState } from "react";
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
  const [notelist, setnotelist] = useState("");
  //console.log(date, month, year, hour, minute);
  useEffect(() => {
    if (note) {
      setisClicked(false);
      ///logic
      const notes = document.querySelector(".note-list");
      setnotelist(notes);
      const lists = document.createElement("li");
      lists.classList.add("note");
      lists.innerHTML = `<div className="dateandtime" data-date="${date}" data-month="${month}" data-year=${year} data-hour=${hour} data-minute=${minute} contentEditable="true"><b>${title}:</b> ${note}</div><br><p>${date}/${month}/${year} ${hour}:${minute}</p>`;
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("delete-button");
      buttonDelete.innerHTML = "Del";
      buttonDelete.addEventListener("click", () => {
        lists.remove();
      });
      lists.appendChild(buttonDelete);
      notes.appendChild(lists);
      notes.value = "";
      setnotelist(notes.childNodes);
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
          <FilterLogic notelist={notelist} setisClicked={setisClicked} title={title} note={note}/>
        </div>
      </div>
      <ul className="note-list"></ul>
    </div>
  );
};

export default EachNote;
