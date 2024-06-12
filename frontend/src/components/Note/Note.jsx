import React from 'react'

function Note({ note }) {
    return (
        <div>
            <p>{note.title}</p>
            <p>{note.text}</p>

            <div>
                {note.categories && note.categories.map((category, index) => (
                    <p key={index}>{category}</p>
                ))
                }
            </div>


        </div>
    )
}

export default Note