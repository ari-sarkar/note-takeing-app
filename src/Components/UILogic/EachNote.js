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
  const [newArray, setnewArray] = useState([]);
  //console.log(date, month, year, hour, minute);
  useEffect(() => {
    if (note) {
      setisClicked(false);
      ///logic //
      const notes = document.querySelector(".note-list");
      const lists = document.createElement("li");
      lists.classList.add("note");
      lists.innerHTML = `${date}/${month}/${year} ${hour}:${minute}<div className="dateandtime" data-date="${date}" data-month="${month}" data-year=${year} data-hour=${hour} data-minute=${minute} contentEditable="true"><b>${title}:</b> ${note}</div>`;
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("delete-button");
      buttonDelete.innerHTML = `<i class="fas fa-trash"></i>`;
      buttonDelete.addEventListener("click", () => {
        lists.remove();
      });
      lists.appendChild(buttonDelete);
      notes.appendChild(lists);
      notes.value = "";
      setnotelist(notes.childNodes);
      settitle("");
      setnote("");
      //console.log(notes.childNodes[0].innerText);
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
    notelist,
    newArray,
  ]);

  ///////////New  Old///////////////
  const sortbyNew = e => {
    const notes = document.querySelector(".note-list");
    const todos = notes.childNodes;
    //   console.log(todos)
    if (todos) {
      todos.forEach(todo => {
          todo.parentElement.style.flexDirection = "column";
      });
    }
    //console.log(e.target.value)
  };
  const sortbyOld = e => {
    const notes = document.querySelector(".note-list");
    const todos = notes.childNodes;
    //   console.log(todos)
    if (todos) {
      todos.forEach(todo => {
          todo.parentElement.style.flexDirection = "column-reverse";
      });
    }
    //console.log(e.target.value)
  };
  // console.log(newArray,typeof(newArray))
  return (
    <div className="filter-eachnote-container">
      <div className="filter-notes">
        <div className="filter-logic-container">
          <FilterLogic
            notelist={notelist}
            setisClicked={setisClicked}
            title={title}
            note={note}
            sortbyNew={sortbyNew}
            sortbyOld={sortbyOld}
          />
        </div>
      </div>
      <ul className="note-list"></ul>
      <ul>
        {/* {console.log(Object.values(newArray).map(item => item))} */}
        {/* {newArray.map(item =><li>{item}</li>)} */}
      </ul>
    </div>
  );
};

export default EachNote;
