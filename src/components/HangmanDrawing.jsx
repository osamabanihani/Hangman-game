import React from "react";

const HangmanDrawing = ({ wrongGuesses }) => {
  return (
    <div className="hangman">
      {/* gallows */}
      <div className="pole-vertical"></div>
      <div className="pole-horizontal"></div>
      <div className="rope"></div>

      {/* body parts */}
      {wrongGuesses > 0 && <div className="head"></div>}
      {wrongGuesses > 1 && <div className="body"></div>}
      {wrongGuesses > 2 && <div className="arm left"></div>}
      {wrongGuesses > 3 && <div className="arm right"></div>}
      {wrongGuesses > 4 && <div className="leg left"></div>}
      {wrongGuesses > 5 && <div className="leg right"></div>}
    </div>
  );
};

export default HangmanDrawing;