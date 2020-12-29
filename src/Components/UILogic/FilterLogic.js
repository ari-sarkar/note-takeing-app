import React from 'react'
import "../../Styles/UILogic/FilterLogic.scss"
const FilterLogic = () => {
    return (
        <div className="filter-logic-wrapper">
            {/* WMY = Week / Month/ Year */}
            {/* NO = New / Old */}
            <div className="filter-by-WMY">
                <button>Week</button>
                <button>Month</button>
                <button>Year</button>
            </div>
            <div className="filter-by-NO">
                <button>New</button>
                <button>Old</button>
            </div>
        </div>
    )
}

export default FilterLogic
