'use client';

import { useState } from 'react';

type Player = 'X' | 'O' | null;

interface GameState {
  board: Player[];
  currentPlayer: Player;
  winner: Player;
  isGameOver: boolean;
}

const TicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isGameOver: false,
  });

  const checkWinner = (board: Player[]): Player => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleCellClick = (index: number) => {
    if (gameState.board[index] || gameState.isGameOver) {
      return;
    }

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;

    const winner = checkWinner(newBoard);
    const isGameOver = winner !== null || newBoard.every(cell => cell !== null);

    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner,
      isGameOver,
    });
  };

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      isGameOver: false,
    });
  };

  const renderCell = (index: number) => {
    return (
      <button
        key={index}
        className="w-20 h-20 bg-white border-2 border-gray-400 text-4xl font-bold text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
        onClick={() => handleCellClick(index)}
        data-testid={`cell-${index}`}
      >
        {gameState.board[index]}
      </button>
    );
  };

  const getGameStatus = () => {
    if (gameState.winner) {
      return `🎉 Speler ${gameState.winner} heeft gewonnen!`;
    }
    if (gameState.isGameOver) {
      return "🤝 Gelijkspel!";
    }
    return `🎮 Speler ${gameState.currentPlayer} is aan de beurt`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Tic Tac Toe</h1>
      
      <div className="mb-6 text-xl font-semibold text-gray-700">
        {getGameStatus()}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-8 bg-gray-300 p-4 rounded-lg shadow-lg">
        {gameState.board.map((_, index) => renderCell(index))}
      </div>

      <button
        onClick={resetGame}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
        data-testid="reset-button"
      >
        🔄 Nieuw Spel
      </button>

      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">📱 Gemaakt met Next.js en Tailwind CSS</p>
        <p>👨‍💻 Door: pinkostinky</p>
      </div>
    </div>
  );
};

export default TicTacToe;
