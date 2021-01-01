import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/FilterLogic.scss";
const FilterLogic = ({ notelist,  sortbyNew, sortbyOld}) => {
  const [noteData, setnoteData] = useState([]);
  const [weekValue, setweekValue] = useState("");
  const [monthValue, setmonthValue] = useState("");
  const [yearValue, setyearValue] = useState("");
  
  useEffect(() => {
    const data = [...notelist];
    const newData = data.map(item => item.childNodes[1]);
    setnoteData(newData);
    //console.log(newData)
    /////////Logic for Filtering Data by WEEK / MONTH / Year///////////////
    noteData.filter(item => {
      if (weekValue !== "" || monthValue !== "" || yearValue !== "") {
        if (
          item.getAttribute("data-date") !== weekValue &&
          item.getAttribute("data-month") !== monthValue &&
          item.getAttribute("data-year") !== yearValue
        ) {
          //console.log(item)
          item.parentNode.style.display = "none";
        } else {
          item.parentNode.style.display = "flex";
        }
      } else {
        item.parentNode.style.display = "flex";
      }
    });
  }, [notelist, weekValue, monthValue, yearValue ]);

  return (
    <div className="filter-logic-wrapper">
      {/* WMY = Week / Month/ Year */}
      <h5>Filter By...</h5>
      <div className="filter-by-WMY">
      
        <input
          type="number"
          placeholder="Week"
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
