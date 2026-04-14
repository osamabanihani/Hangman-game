import { useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import Keybord from "./components/Keybord";
import "./App.css";

function App() {
  const words = [
    "react",
    "javascript",
    "computer",
    "developer",
    "programming",
    "vite",
    "bootstrap",
    "node",
  ];

  const maxWrong = 6;

  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
  };

  const handleGuess = (letter) => {
    if (gameStatus !== "playing") return;
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!selectedWord.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!selectedWord) return;

    const isWinner = selectedWord
      .split("")
      .every((l) => guessedLetters.includes(l));

    if (isWinner) setGameStatus("won");
    else if (wrongGuesses >= maxWrong) setGameStatus("lost");
  }, [guessedLetters, wrongGuesses, selectedWord]);

  return (
    <div className="container text-center mt-5">
      <h1>Hangman Game</h1>

      <HangmanDrawing wrongGuesses={wrongGuesses} />

      <WordDisplay
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
      />

      <p>Wrong: {wrongGuesses} / {maxWrong}</p>

      {gameStatus === "won" && (
        <h3 className="text-success">You Win 🎉</h3>
      )}

      {gameStatus === "lost" && (
        <h3 className="text-danger">
          Game Over 😢 Word: {selectedWord}
        </h3>
      )}

      <Keybord
        guessedLetters={guessedLetters}
        onGuess={handleGuess}
        disabled={gameStatus !== "playing"}
      />

      <button className="btn btn-success mt-4" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default App;