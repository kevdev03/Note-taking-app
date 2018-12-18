import React, { Component } from 'react';

class Left extends Component {
  handleNote = (uid) => {
    this.props.onNoteChange(uid);
  }

  render() {
    return (
      <section className="Left">
        <Settings onNew={this.onNewNote.bind(this)} />
        <NotesList notes={this.props.notes} handleNote={this.handleNote.bind(this)} />
      </section>
    );
  }

  onNewNote = (isAddNewNoteClicked) => {
    this.props.onNewNote(isAddNewNoteClicked);
  }
}

class Settings extends Component {
  addNewNote = () => {
    this.props.onNew(true);
  }

  render() {
    return (
      <div className="Settings">
        <input type="text" name="" id="" placeholder="Search notes..." />
        <button onClick={this.addNewNote.bind(this)}>add</button>
      </div>
    );
  }
}

class NotesList extends Component {
  handleClick = (uid) => {
    this.props.handleNote(uid);
  }

  render() {
    const notes = this.props.notes;
    let notesList = [];

    for (let uid in notes) {
      if (notes.hasOwnProperty(uid)) {
        const note = notes[uid];
        notesList.push(
          <Note key={uid}
           uid={uid}
           title={note.title}
           content={note.content}
           handleClick={this.handleClick.bind(this)} />);
      }
    }

    return (
      <ul className="NotesList">
        {notesList.length > 0 && notesList}
      </ul>
    )
  }
}

class Note extends Component {
  onClick = () => {
    this.props.handleClick(this.props.uid);
  }
  
  render() {
    return (
      <li id={this.props.uid} className="Note" onClick={this.onClick.bind(this)} >
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </li>
    )
  }
}

export { Left }