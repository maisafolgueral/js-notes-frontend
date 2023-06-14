import React, { Fragment } from "react";
import Moment from "moment";
import "../../../styles/notes.scss";
import { Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes(props) {
  return (
    <Fragment>
      <div className="columns" breakpoint="mobile">
        <div className="column is-6 is-offset-1">
          <h6 class="title is-6">{props.notes.length} Notes</h6>
        </div>

        <div className="column is-2">
          <Button
            state="active"
            color="custom-purple"
            outlined
            size="small"
            onClick={() => props.createNote()}
          >
            Notes +{" "}
          </Button>
        </div>
      </div>
      <ul className="notes-list">
        {props.notes.map((item, key) => (
          <li
            key={key}
            onClick={() => props.selectNote(item._id)}
            className={item === props.current_note ? "selected" : ""}
          >
            <h6 class="title is-6">
              {item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}
            </h6>
            <h6 class="subtitle is-6" spaced={false}>
              {item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}
            </h6>
            <div className="columns" breakpoint="mobile">
              <div className="column is-10">
                <span class="tag is-dark">
                  {Moment(item.created_at).format("DD/MM")}
                </span>
              </div>
              <div className="column is-2">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => props.deleteNote(item)}
                  color="grey"
                />
              </div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListNotes;
