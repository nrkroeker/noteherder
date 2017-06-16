import React, { Component } from 'react'
import './Note.css'

class Note extends Component {

  loadNote(id) {

  }

  render() {
    return (
      <li className={this.props.id} onClick={() => this.loadNote(this.props.id)}>
        <div className="note">
          <div className="note-title">
            {this.props.note.title}
          </div>
          <div className="note-body">
            <p>
              {this.props.note.body}
            </p>
          </div>
          <div className="note-button">
            <button className="delete" onClick={() => this.props.deleteNote(this.props.note)}>Delete</button>
          </div>
        </div>
      </li>
    )
  }
}

export default Note
