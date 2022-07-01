import "./ButtonTask.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function template() {
  return (
    <div className="button-task">
      <Link className="txt-decoration-none" to={this.props.redirect}>
        <Button
          className="button-choose"
          variant="contained"
          color={this.props.color}
        >
          {this.props.img && (
            <img className="img-button-task" src={this.props.img}></img>
          )}
          {this.props.text}
        </Button>
      </Link>
    </div>
  );
}

export default template;
