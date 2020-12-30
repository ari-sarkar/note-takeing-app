import React, { useEffect, useState } from "react";
import "../../Styles/UILogic/FilterLogic.scss";
const FilterLogic = ({ notelist, setisClicked, title, note }) => {
  const [noteData, setnoteData] = useState([]);
  const [weekValue, setweekValue] = useState("");
  const [monthValue, setmonthValue] = useState("");
  const [yearValue, setyearValue] = useState("");
  const [isbtnClicked, setisbtnClicked] = useState(false);
  useEffect(() => {
    const data = [...notelist];
    const newData = data.map(item => item.childNodes[0]);
    setnoteData(newData);
    //console.log(newData)
    ////////
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
  }, [notelist, weekValue, monthValue, yearValue]);

  ///////////New  Old///////////////


  return (
    <div className="filter-logic-wrapper">
      {/* WMY = Week / Month/ Year */}
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
        <button onClick={() =>setisbtnClicked(!isbtnClicked)}>New</button>
        {/* <button onClick={sortbyOld}>Old</button> */}
      </div>
    </div>
  );
};

export default FilterLogic;
