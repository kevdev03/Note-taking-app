import React, { Component } from 'react';

class Left extends Component {
  constructor() {
    super();

    this.state = { isAddNewNoteClicked: false };
  }

  render() {
    return (
      <section className="Left">
        <Settings onNew={this.onNewNote.bind(this)} />
        <NotesList newNote={this.state.isAddNewNoteClicked} />
      </section>
    );
  }

  onNewNote = (isAddNewNoteClicked) => {
    // console.log('onNewNote', isAddNewNoteClicked);
    this.setState({ isAddNewNoteClicked });
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
  render() {
    return (
      <ul className="NotesList">
        {(this.props.newNote) && <NewNote />}
        <Note />
      </ul>
    )
  }
}

class NewNote extends Component {
  render() {
    return(<li className="Note active"><h3 ref="newNoteTitle">New Note</h3></li>);
  }
}

class Note extends Component {
  render() {
    return (
      <li className="Note">
        <h3>Leverage agile frameworks</h3>
        <p>to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative...</p>
      </li>
    )
  }
}

export { Left }