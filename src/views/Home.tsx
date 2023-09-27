import MyNotes from '../components/MyNotes';
import { useState } from 'react';
import Navbar from '../components/Navbar';

interface nlDashOptionProps {
  nlOptionName: string;
  onClick: (nlOptionName:string) => void;
}

function NoteListDashOption({ nlOptionName, onClick}: nlDashOptionProps) {
  return (
    <button className="note-list-dash-option"
    onClick={() => onClick(nlOptionName)}>
      { nlOptionName }
    </button>
      );
}

function NoteListDisplay({ noteValue }: { noteValue:string }) {
  return (
    <>
      <div className="note-list-display">
        { noteValue }
      </div>
    </>
      );
}

function NoteListControl() {
  return (
    <>
      <div className="note-list-control">
        <button className="note-list-control-clear">
          Clear
        </button>
        <button className="note-list-control-save">
          Save
        </button>
        <button className="note-list-control-send">
          Send
        </button>
      </div>
    </>
      );
}

function NoteList () {
  const [ currentView, setView] = useState<string>("Create");

  function handleView(value: string) {
    setView(value);
  }

  return (
    <>
      { currentView === "Create" && (
        <div className="note-list-container">
          <div className="note-list-dash">
            <NoteListDashOption nlOptionName="Create" onClick={() => handleView("Create")} />
            <NoteListDashOption nlOptionName="My Notes" onClick={() => handleView("My Notes")} />
            <NoteListDashOption nlOptionName="Explore" onClick={() => handleView("Explore")} />
          </div>
          <NoteListDisplay noteValue=""/>
          <NoteListControl />
        </div>
      )}
      { currentView == "My Notes" && 
      <>
        <div className="note-list-dash">
        <NoteListDashOption nlOptionName="Create" onClick={() => handleView("Create")} />
        <NoteListDashOption nlOptionName="My Notes" onClick={() => handleView("My Notes")} />
        <NoteListDashOption nlOptionName="Explore" onClick={() => handleView("Explore")} />
        </div>
        <MyNotes />
      </>  
      }
      { currentView == "Explore" && <h1>Explore</h1>

      }
    </>
      );  
}



function Home() {
  return (
    <>
    <Navbar />
      <NoteList />
    </>
      );
}


export default Home;
