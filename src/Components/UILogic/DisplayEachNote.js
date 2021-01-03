import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/DisplayEachNote.scss";
import FilterLogic from "./FilterLogic";
const EachNote = ({ title, note, settitle, setnote, setisClicked }) => {
  const [notelist, setnotelist] = useState("");
  //Taking Date values by Destructuring
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
  //console.log(month, date, year, hour, minute, second);

  ///Displaying User Inputs and Delete Button //

  useEffect(() => {
    if (note) {
      setisClicked(false);
      const notes = document.querySelector(".note-list");
      const lists = document.createElement("li");
      lists.classList.add("note");
      lists.innerHTML = `Date: ${date}/${month}/${year} Time: ${hour}:${minute}<div className="dateandtime" data-date="${date}" data-month="${month}" data-year=${year} data-hour=${hour} data-minute=${minute} contentEditable="true"><b>${title}:</b> ${note}</div>`;
      //saveLocalNotes(lists.innerHTML);
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("delete-button");
      buttonDelete.innerHTML = `<i class="fas fa-trash"></i>`;

      buttonDelete.addEventListener("click", () => {
        //removeLocalNotes(lists.innerHTML)
        lists.remove();
      });
      lists.appendChild(buttonDelete);
      notes.appendChild(lists);
      notes.value = "";
      setnotelist(notes.childNodes);
      settitle("");
      setnote("");
      //console.log(lists.innerHTML);
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
    console.log(notes)
  };
///////Trying to Add notes to local storage and delete them on click

  // document.addEventListener("DOMContentLoaded", getNotes);

  // function saveLocalNotes(note) {
  //   let Notes;
  //   if (localStorage.getItem("Notes") === null) {
  //     Notes = [];
  //   } else {
  //     Notes = JSON.parse(localStorage.getItem("Notes"));
  //   }
  //   Notes.push(note);
  //   localStorage.setItem("Notes", JSON.stringify(Notes));
  // }

  // function getNotes() {
  //   let Notes;
  //   if (localStorage.getItem("Notes") === null) {
  //     Notes = [];
  //     //console.log("error while get")
  //   } else {
  //     Notes = JSON.parse(localStorage.getItem("Notes"));

  //     //console.log("sucess in get data",Notes)
  //   }
  //   Notes.forEach(note => {
  //     const notes = document.querySelector(".note-list");
  //     const lists = document.createElement("li");
  //     lists.classList.add("note");
  //     lists.innerHTML = note;
  //     const buttonDelete = document.createElement("button");
  //     buttonDelete.classList.add("delete-button");
  //     buttonDelete.innerHTML = `<i class="fas fa-trash"></i>`;
  //     buttonDelete.addEventListener("click", () => {
  //       removeLocalNotes(lists)
  //       lists.remove();
  //     });
  //     lists.appendChild(buttonDelete);
  //     notes.appendChild(lists);
  //   });
  // }

  // function removeLocalNotes(note){
  //   let Notes;
  //   if(localStorage.getItem('Notes')=== null){
  //     Notes = []
  //   }else{
  //     Notes = JSON.parse(localStorage.getItem('Notes'))
  //   }
  //   // localStorage.removeItem(todo)
  //   console.log(note.innerHTML)
  //   const noteIndex = note.innerHTML
  //   // console.log(noteIndex)
  //    console.log(Notes.indexOf(noteIndex))
  //   //const noteIndex = note.childNodes[1].childNodes[0].innerText
  //   //console.log(notes.indexOf(noteIndex.parentElement))
  //   // notes.splice(notes.indexOf(noteIndex),1)
  //   // localStorage.setItem("todos", JSON.stringify(notes))
 
  // }


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
