import React from 'react'
import '../styles/noteHeader.css'
const NoteHeader = ({title, date}) => {
    return (
        <div className="note-header">
            <div>
                <h1>{title}</h1>
                <h6>{date}</h6>
            </div>
            <div className="note-header-tag">

            </div>
        </div>
    )
}

export default NoteHeader
