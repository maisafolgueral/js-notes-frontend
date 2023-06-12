import React, { Fragment, useState } from 'react';
import HeaderLogged from "../../../components/header_logged";
import { Columns } from "react-bulma-components";
import "../../../styles/notes.scss";
import Notes from "../../../components/notes";

function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Columns centered>
        <Columns size="half">
          <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </Columns>
      </Columns>
    </Fragment>
  );
}

export default NotesScreen;
