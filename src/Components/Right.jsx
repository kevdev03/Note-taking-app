import React, { Component } from 'react';

class Right extends Component {
  componentDidUpdate() {
    if (this.props.hasNewNote && this.refs.noteTitle.disabled) {
      this.enableTextArea();
    }
  }

  handleNoteTitleChange = () => {
    const noteTitle = this.refs.noteTitle.value;
    this.props.onTitleChange(noteTitle);
  }

  handleNoteContentChange = () => {
    const noteContent = this.refs.noteContent.value;
    this.setState({ noteText: noteContent });
    this.props.onContentChange(noteContent)
  }

  enableTextArea = () => {
    const noteTitle = this.refs.noteTitle;
    const noteContent = this.refs.noteContent;

    noteTitle.focus();
    noteTitle.disabled = false;
    noteContent.disabled = false;
    noteContent.placeholder = "Type away!"
  }

  render() {
    return (
      <section className="Right">
        <input ref="noteTitle" onChange={this.handleNoteTitleChange.bind(this)} type="text" placeholder="Enter note title" disabled tabIndex="1" />
        <TextControls />
        <textarea onChange={this.handleNoteContentChange.bind(this)} ref="noteContent" cols="30" rows="10" placeholder="Click a note or add new" disabled tabIndex="2"></textarea>
      </section>
    );
  }
}

class TextControls extends Component {
  render() {
    return (
      <div className="TextControls">
        <ul >
          <li><button>B</button></li>
          <li><button>I</button></li>
          <li><button>U</button></li>
        </ul>
        <ul>
          <li><button>info</button></li>
          <li><button>history</button></li>
          <li><button>delete</button></li>
          <li><button>&hellip;</button></li>
        </ul>
      </div>
    );
  }
}

export { Right };