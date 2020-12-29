import React, { useEffect } from 'react'
import "../../Styles/UILogic/EachNote.scss"
const EachNote = ({ title, note, setisClicked }) => { 
useEffect(() => {
    if(note){
        const notes = document.querySelector(".note-list")
    const list = document.createElement("li")
    //list.classList.add = "my-list"
    const buttonDelete = document.createElement("button")
    //buttonDelete.classList.add = "button-delete"
    // const buttonEdit = document.createElement("button")
    list.innerHTML = `<div><input value="${title}-${note}"></input></div>`
    buttonDelete.innerHTML= `<div>
    <button>Del</button>
    </div>`
    // buttonEdit.innerHTML= `<div>
    // <button>Edit</button>
    // </div>`
    list.append(buttonDelete)
        notes.appendChild(list) 
        setisClicked(false)
        buttonDelete.addEventListener("click", () => {
            list.style.display = "none";
        })
        // buttonEdit.addEventListener("click", () => {
        //     list.style.borderColor = "green";
        // })
    }
},[setisClicked, note, title])
        
        
    return (
        <div className="note-list">
        </div>
    )
}

export default EachNote
