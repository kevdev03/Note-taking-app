import React, { Component } from 'react';

class Right extends Component {
  handleNoteTitleChange = () => {
    const noteTitle = this.refs.noteTitle.value;
    this.props.onTitleChange(noteTitle);
  }

  handleNoteContentChange = () => {
    const noteContent = this.refs.noteContent.value;
    this.setState({ noteText: noteContent });
    this.props.onContentChange(noteContent)
  }

  handleNoteDelete = () => {
    this.props.onAction('delete', this);
  }

  render() {
    return (
      <section className="Right">
        <input
         ref="noteTitle"
         onChange={this.handleNoteTitleChange.bind(this)}
         type="text"
         placeholder="Enter note title" 
         tabIndex="1" 
         value={this.props.currentNote.id && this.props.currentNote.title}/>

        <TextControls onDelete={this.handleNoteDelete.bind(this)} />
        <textarea 
        ref="noteContent" 
        onChange={this.handleNoteContentChange.bind(this)} 
        cols="30" 
        rows="10" 
        placeholder="Start typing" 
        tabIndex="2"
        value={this.props.currentNote.id && this.props.currentNote.content}></textarea>
      </section>
    );
  }
}

class TextControls extends Component {
  actionFunction = () => {
    console.log('clicked!');
  }

  deleteNote = () => {
    this.props.onDelete(this);
  }

  render() {
    return (
      <div className="TextControls">
        <ul >
          <li><button onClick={this.actionFunction.bind(this)}>B</button></li>
          <li><button onClick={this.actionFunction.bind(this)}>I</button></li>
          <li><button onClick={this.actionFunction.bind(this)}>U</button></li>
        </ul>
        <ul>
          <li><button onClick={this.actionFunction.bind(this)}>info</button></li>
          <li><button onClick={this.actionFunction.bind(this)}>history</button></li>
          <li><button onClick={this.deleteNote.bind(this)}>delete</button></li>
          <li><button onClick={this.actionFunction.bind(this)}>&hellip;</button></li>
        </ul>
      </div>
    );
  }
}

export { Right };