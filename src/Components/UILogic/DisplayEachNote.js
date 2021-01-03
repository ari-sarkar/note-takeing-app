import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/DisplayEachNote.scss";
import FilterLogic from "./FilterLogic";
const EachNote = () => {
  const [myNotes, setMyNotes] = useState("");

  useEffect(() => {
    let dataString = localStorage.getItem('data')
    let data = JSON.parse(dataString)
    if (data) setMyNotes(data)
  },[])



  ///////////On Button Click Sorting the Data///////////////
  const parseddata =JSON.parse(localStorage.getItem('data'))
  const sortbyNew = () => {
    parseddata.sort((x, y) => {
       return y.timestamp.split("-").join("") - x.timestamp.split("-").join("")
    })
    setMyNotes(parseddata)
  };

  const sortbyOld = () => {
    parseddata.sort((x, y) => {
      return x.timestamp.split("-").join("") - y.timestamp.split("-").join("")
    })
    setMyNotes(parseddata)
  };


    const removeItem = e => {
      console.log(e.target.value)
      myNotes.splice(e.target.value, 1)
      localStorage.setItem('data', JSON.stringify(myNotes))
      if(localStorage.getItem("data").length === null) localStorage.removeItem("data")
      window.location.reload()
    }


  return (
    <div className="filter-eachnote-container">
      <FilterLogic
        sortbyNew={sortbyNew}
        sortbyOld={sortbyOld}
        setMyNotes={setMyNotes}
      />
      {/* Container to hold Each Note */}
      <div className="note-list">
        {
          myNotes.length ? myNotes.map((el, i ) => {
            return <div key={i+1}
            contentEditable="true"
            >Time: {el.timestamp} Title: {el.title}  Description: {el.note} <button type='submit' value={i} onClick={removeItem}><i class="fas fa-trash"></i></button></div>
          }): 'No Data Avilable'
        }
      </div>
    </div>
  );
};

export default EachNote;
