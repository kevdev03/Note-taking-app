import React, { Component } from 'react';
import './Styles/reset.css';
import './App.css';
import { Left } from './Components/Left';
import { Right } from './Components/Right'

class App extends Component {
  constructor() {
    super();

    this.state = { 
      hasNewNote: false,
      currentNoteTitle: '',
      currentNoteContent: '',
      // autoSaveTimer: 
      notes: [],
    };
  }

  handleTitleChange = (text) => this.setState({currentNoteTitle: text});
  handleContentChange = (text) => this.setState({currentNoteContent: text});
  onNewNote = (isAddNewNoteClicked) => this.setState({hasNewNote: isAddNewNoteClicked});

  render() {
    return (
      <main className="App">
        <Left onNewNote={this.onNewNote.bind(this)} />
        <Right 
        hasNewNote={ this.state.hasNewNote } 
        onTitleChange={this.handleTitleChange.bind(this)} 
        onContentChange={this.handleContentChange.bind(this)} 
        />
      </main>
    );
  }
}

export default App;
