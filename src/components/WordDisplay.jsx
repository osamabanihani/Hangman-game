import React from "react";

const WordDisplay = ({ selectedWord, guessedLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;