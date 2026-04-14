import React from "react";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keybord = ({ guessedLetters, onGuess, disabled }) => {
  return (
   <div className="keyboard d-flex flex-wrap justify-content-center gap-2 mt-4">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="btn btn-primary"
          onClick={() => onGuess(letter)}
          disabled={
            guessedLetters.includes(letter) || disabled
          }
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Keybord;