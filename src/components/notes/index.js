import React, { Fragment } from "react";
import "../../styles/notes.scss";
import { push as Menu } from "react-burger-menu";

function Notes(props) {
  return (
    <Fragment>
      <div className="columns notes" id="notes">
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
            <div className="columns is-centered">
              <div className="column is-10 is-offset-1">Search...</div>
            </div>
          </div>
          <p>List...</p>
        </Menu>
        
        <div className="columns is-centered">
          <div className="column is-12 notes-editor" id="notes-editor">
            Editor...
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Notes;
