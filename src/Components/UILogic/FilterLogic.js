import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/FilterLogic.scss";
const FilterLogic = ({ notelist,  sortbyNew, sortbyOld, setMyNotes }) => {
  const [weekValue, setweekValue] = useState(null);
  const [monthValue, setmonthValue] = useState(null);
  const [yearValue, setyearValue] = useState(null);
  
  useEffect(() => {
let noteData = JSON.parse(localStorage.getItem("data"))
    /////////Logic for Filtering Data by WEEK / MONTH / Year///////////////
    let newArr = []
      noteData.filter(item =>  { 
        const dateandTimeArr = item.timestamp.split("-")
        //console.log(dateandTimeArr)
        if(dateandTimeArr[0] === yearValue || dateandTimeArr[1] === monthValue || dateandTimeArr[2] === weekValue){
          if(newArr) newArr.push(item)
          setMyNotes(newArr)
        }
      });
     
  }, [ setMyNotes,weekValue, monthValue, yearValue ]);
  return (
    <div className="filter-logic-wrapper">
      {/* WMY = Week / Month/ Year */}
      <h5>Filter By...</h5>
      <div className="filter-by-WMY">
      
        <input
          type="number"
          placeholder="Date"
          value={weekValue}
          onChange={e => setweekValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Month"
          value={monthValue}
          onChange={e => setmonthValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={yearValue}
          onChange={e => setyearValue(e.target.value)}
        />
      </div>
      {/* NO = New / Old */}
      <div className="filter-by-NO">
        <button value="asen"onClick={sortbyNew}>New</button>
        <button  onClick={sortbyOld}>Old</button>
      </div>
    </div>
  );
};

export default FilterLogic;
