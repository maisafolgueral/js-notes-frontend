import React, { Fragment, useEffect, useState } from "react";
import "../../styles/notes.scss";
import { slide as Menu } from "react-burger-menu";
import List from "../notes/list";
import NoteService from "../../services/note";
import Editor from "../notes/editor";

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    } else {
      setNotes([]);
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    });
    setCurrentNote(note);
  };

  const createNote = async () => {
    await NoteService.create();
    fetchNotes();
  };

  const deleteNote = async (note) => {
    await NoteService.delete(note._id);
    fetchNotes();
  };

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  };

  return (
    <Fragment>
      <div className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <div>
            <div className="columns">
              <div className="column is-10 is-offset-1">Search...</div>
            </div>
          </div>

          <List
            notes={notes}
            selectNote={selectNote}
            current_note={current_note}
            createNote={createNote}
            deleteNote={deleteNote}
          />
          <br />
        </Menu>

        <div className="column is-12 notes-editor" id="notes-editor">
          <Editor note={current_note} updateNote={updateNote} />
        </div>
      </div>
    </Fragment>
  );
}

export default Notes;
