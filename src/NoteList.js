import React, { Component } from 'react'

import './NoteList.css'
import Note from './Note'

class NoteList extends Component {

  render() {
    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          { Object.keys(this.props.notes).map((noteId) => {
            return <Note note={this.props.notes[noteId]} id={noteId} key={noteId} deleteNote={this.props.deleteNote} loadNote={this.props.loadNote}/>
          }) }
        </ul>
      </div>
    )
  }
}

export default NoteList
