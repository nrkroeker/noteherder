import React, { Component } from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Sidebar />
        <NoteList notes={this.props.notes} deleteNote={this.props.deleteNote}/>
        <NoteForm saveNote = {this.props.saveNote} ref='noteForm' />
      </div>
    )
  }
}

export default Main
