import React, { Component } from 'react';
import './Styles/reset.css';
import './App.css';
import { Left } from './Components/Left';
import { Right } from './Components/Right';
const uniqid = require('uniqid');

class App extends Component {
  constructor() {
    super();

    this.state = { 
      hasNewNote: false,
      currentNote: {
        id: '',
        title: '',
        content: '', },
      notes: {
        "jptbl54z": {title: 'Groceries', content: 'Milk\nCookies'},
        "jptbl9rs": {title: 'Car Items', content: 'Wheel\nA/C\nAudio Panel'},
      },
      // autoSaveTimer: 
    };
  }

  handleSave = () => {
    const uid = this.state.currentNote.id || uniqid();
    const notes = this.state.notes;

    // do something
    const currentNote = {
      id: uid,
      title: this.state.currentNote.title,
      content: this.state.currentNote.content,
    }

    notes[uid] = {
      title: this.state.currentNote.title, 
      content: this.state.currentNote.content,
    };

    this.setState({
      hasNewNote: false, 
      notes: notes,
      currentNote: currentNote
    });
  }

  handleTitleChange = (text) => {
    const currentNote = this.state.currentNote;
    currentNote.title = text;
    this.setState({currentNote: currentNote});
    this.handleSave();
  }

  handleContentChange = (text) => {
    const currentNote = this.state.currentNote;
    currentNote.content = text;
    this.setState({currentNote: currentNote});
    this.handleSave();
  };
  
  onNewNote = (isAddNewNoteClicked) => {
    const uid =  uniqid();
    const notes = this.state.notes;
    notes[uid] = {
      title: "New Note", 
      content: "Type away!",
    };

    this.setState({
      hasNewNote: isAddNewNoteClicked, 
      currentNote: {
        id: uid,
        title: '',
        content: '', },
      notes: notes,
    });
  };

  handleNoteSwitching = (uid) => {
    const notes = this.state.notes;
    let currentNote = this.state.currentNote;

    currentNote = {
      content: notes[uid].content, 
      title: notes[uid].title, 
      id: uid,      
    }
    
    this.setState({currentNote: currentNote});
  }

  handleAction = (action, e) => {
    if (action == 'delete') {
      const notes = this.state.notes;
      const uid = e.props.currentNote.id;

      delete notes[uid];
      this.setState({
        notes: notes,
        currentNote: {
          id: '',
          title: '',
          content: '', }
      });
    }
  }

  render() {
    return (
      <main className="App">
        <Left 
        onNewNote={this.onNewNote.bind(this)} 
        onTitleChange={this.state.currentNote.title} 
        notes={this.state.notes}
        onNoteChange={this.handleNoteSwitching.bind(this)} />

        <Right 
        hasNewNote={this.state.hasNewNote} 
        onTitleChange={this.handleTitleChange.bind(this)} 
        onContentChange={this.handleContentChange.bind(this)} 
        currentNote={this.state.currentNote} 
        onAction={this.handleAction.bind(this)}/>
      </main>
    );
  }
}

export default App;