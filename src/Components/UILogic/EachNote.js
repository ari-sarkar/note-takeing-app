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
      setnotelist(notes);
      const lists = document.createElement("li");
      lists.classList.add("note");
      lists.innerHTML =
      `${date}/${month}/${year} ${hour}:${minute}<div className="dateandtime" data-date="${date}" data-month="${month}" data-year=${year} data-hour=${hour} data-minute=${minute} contentEditable="true"><b>${title}:</b> ${note}</div>`
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
  const sortbyOld=() => {
    const data = [...notelist];
    const output = data.map(item => item.childNodes);
    output.sort((a, b) => {
      if (b[0].textContent > a[0].textContent) {
        console.log(output.style,"1");
        return 1;
      } else if (a[0].textContent > b[0].textContent) {
        //console.log(output, "--1");///
        return -1;
      } else {
        console.log(0);
        return 0;
      }
    });
    setnewArray(output)
  }
 
   const sortbyNew=() => {
    const data = [...notelist];
    const output = data.map(item => item.childNodes);
   //console.log(output)
    output.sort((a, b) => {
      if (b[0].textContent < a[0].textContent) {
        //console.log(output, "1");///
        return 1;
      } else if (a[0].textContent < b[0].textContent) {
        console.log(output, "--1");
        return -1;
      } else {
        // console.log(0);
        return 0;
      }
    });
    setnewArray(output)
   }
//console.log(newArray)

const arryfromObj = Object.entries(newArray)
const eachNode = arryfromObj.map(item => <li>{item[1]}</li>)
console.log(eachNode)
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
    
    </div>
  );
};

export default EachNote;
