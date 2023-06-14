import React, { Fragment, useState } from "react";
import HeaderLogged from "../../../components/header_logged";
import "../../../styles/notes.scss";
import Notes from "../../../components/notes";

function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <div className="columns is-centered">
        <div className="column half">
          <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </Fragment>
  );
}

export default NotesScreen;
