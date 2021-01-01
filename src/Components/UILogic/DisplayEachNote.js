import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/DisplayEachNote.scss";
import FilterLogic from "./FilterLogic";
const EachNote = ({ title, note, settitle, setnote, setisClicked }) => {
  const [notelist, setnotelist] = useState("");
  //Taking Date values by Destructuring
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
  //console.log(month, date, year, hour, minute, second);

  ///Displaying User Input and Delete Button //
 
  useEffect(() => {
    if (note) {
      setisClicked(false);
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
  ]);

  ///////////On Button Click Sorting the Data///////////////
  const sortbyNew = e => {
    const noteslist = document.querySelector(".note-list");
    const notes = noteslist.childNodes;
    //   console.log(todos)
    if (notes) {
      notes.forEach(note => {
        note.parentElement.style.flexDirection = "column";
      });
    }
    //console.log(e.target.value)
  };

  const sortbyOld = e => {
    const noteslist = document.querySelector(".note-list");
    const notes = noteslist.childNodes;
    //   console.log(todos)
    if (notes) {
      notes.forEach(note => {
        note.parentElement.style.flexDirection = "column-reverse";
      });
    }
    //console.log(e.target.value)
  };
  // console.log(newArray,typeof(newArray))

  return (
    <div className="filter-eachnote-container">
      <FilterLogic
        notelist={notelist}
        setisClicked={setisClicked}
        title={title}
        note={note}
        sortbyNew={sortbyNew}
        sortbyOld={sortbyOld}
      />
      {/* Container to hold Each Note */}
      <ul className="note-list"></ul>
    </div>
  );
};

export default EachNote;
