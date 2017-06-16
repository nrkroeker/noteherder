import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () =>  this.props.saveNote(this.state.note)
    )
  }

  resetForm = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

  resetOnDelete() {
    // Set up if statement to check if the note it's deleting is active
    // If it's active, reset form
    // If not, don't worry about it
    this.setState({ note: this.blankNote() })
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.resetForm}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              cols="30"
              rows="10"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
          ></textarea>
          </p>
          <button type="submit">Reset</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
