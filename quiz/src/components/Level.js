import React from "react";
import { NavLink } from "react-router-dom";

function Level(props) {
  return (
    <>
      <section>
        <h2>Levels</h2>
        <div className="levels">
          <button
            className={props.levels === "eaisy" ? "green" : "red"}
            onClick={(event) => props.handleDifficulty(event, "eaisy")}
          >
            Eaisy
          </button>
          <button
            className={props.levels === "medium" ? "green" : "red"}
            onClick={(event) => props.handleDifficulty(event, "medium")}
          >
            Medium
          </button>
          <button
            className={props.levels === "hard" ? "green" : "red"}
            onClick={(event) => props.handleDifficulty(event, "hard")}
          >
            Hard
          </button>
        </div>

        {props.category && props.level ? (
          <div className="mb-5 flex justify-center">
            <NavLink
              to={`/quiz/${props.category.id}/${props.level}`}
              className="green"
            >
              Start Quiz
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default Level;
