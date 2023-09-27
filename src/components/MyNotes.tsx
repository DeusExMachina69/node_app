import { useState } from 'react';

interface Props {

}

function MyNotesInterface() {
  return (
    <>
      <div className="my-notes-interface">
        <h3>Notes</h3>
        <div className="my-notes-interface-list">
          interface
        </div>
      </div>
    </>
      );
}

function MyNotesControl() {
  return (
    <>
      <div className="my-notes-control">
        <button className="my-notes-control-edit">
          Edit
        </button>
        <button className="my-notes-control-delete">
          Delete
        </button>
      </div>
    </>
      );
}

function MyNotesDisplay() {
  return (
    <>
      <div className="my-notes-display">
        My Notes Display
      </div>
    </>
      );
}

function MyNotes() {
  return (
    <>
      <div className="my-notes-container">
        <MyNotesInterface />
        <MyNotesDisplay />
        <MyNotesControl />
      </div>
    </>
      );
}


export default MyNotes;
