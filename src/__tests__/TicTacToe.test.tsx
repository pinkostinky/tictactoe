import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from '@/components/TicTacToe';

describe('TicTacToe', () => {
  beforeEach(() => {
    render(<TicTacToe />);
  });

  test('renders the game title', () => {
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  });

  test('renders 9 cells', () => {
    for (let i = 0; i < 9; i++) {
      expect(screen.getByTestId(`cell-${i}`)).toBeInTheDocument();
    }
  });

  test('renders reset button', () => {
    expect(screen.getByTestId('reset-button')).toBeInTheDocument();
  });

  test('shows initial game status', () => {
    expect(screen.getByText('🎮 Speler X is aan de beurt')).toBeInTheDocument();
  });

  test('allows players to make moves', () => {
    const cell0 = screen.getByTestId('cell-0');
    
    // First move - X
    fireEvent.click(cell0);
    expect(cell0).toHaveTextContent('X');
    expect(screen.getByText('🎮 Speler O is aan de beurt')).toBeInTheDocument();
    
    // Second move - O
    const cell1 = screen.getByTestId('cell-1');
    fireEvent.click(cell1);
    expect(cell1).toHaveTextContent('O');
    expect(screen.getByText('🎮 Speler X is aan de beurt')).toBeInTheDocument();
  });

  test('prevents clicking on occupied cells', () => {
    const cell0 = screen.getByTestId('cell-0');
    
    // First click
    fireEvent.click(cell0);
    expect(cell0).toHaveTextContent('X');
    
    // Second click on same cell should not change it
    fireEvent.click(cell0);
    expect(cell0).toHaveTextContent('X');
    expect(screen.getByText('🎮 Speler O is aan de beurt')).toBeInTheDocument();
  });

  test('detects horizontal win', () => {
    // X wins with top row
    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-3')); // O
    fireEvent.click(screen.getByTestId('cell-1')); // X
    fireEvent.click(screen.getByTestId('cell-4')); // O
    fireEvent.click(screen.getByTestId('cell-2')); // X wins
    
    expect(screen.getByText('🎉 Speler X heeft gewonnen!')).toBeInTheDocument();
  });

  test('detects vertical win', () => {
    // X wins with first column
    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-1')); // O
    fireEvent.click(screen.getByTestId('cell-3')); // X
    fireEvent.click(screen.getByTestId('cell-2')); // O
    fireEvent.click(screen.getByTestId('cell-6')); // X wins
    
    expect(screen.getByText('🎉 Speler X heeft gewonnen!')).toBeInTheDocument();
  });

  test('detects diagonal win', () => {
    // X wins with main diagonal
    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-1')); // O
    fireEvent.click(screen.getByTestId('cell-4')); // X
    fireEvent.click(screen.getByTestId('cell-2')); // O
    fireEvent.click(screen.getByTestId('cell-8')); // X wins
    
    expect(screen.getByText('🎉 Speler X heeft gewonnen!')).toBeInTheDocument();
  });

  test('detects draw game', () => {
    // Create a draw scenario
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    moves.forEach(cellIndex => {
      fireEvent.click(screen.getByTestId(`cell-${cellIndex}`));
    });
    
    expect(screen.getByText('🤝 Gelijkspel!')).toBeInTheDocument();
  });

  test('reset button works correctly', () => {
    // Make some moves
    fireEvent.click(screen.getByTestId('cell-0'));
    fireEvent.click(screen.getByTestId('cell-1'));
    
    // Reset the game
    fireEvent.click(screen.getByTestId('reset-button'));
    
    // Check that board is cleared
    for (let i = 0; i < 9; i++) {
      expect(screen.getByTestId(`cell-${i}`)).toHaveTextContent('');
    }
    
    // Check that game status is reset
    expect(screen.getByText('🎮 Speler X is aan de beurt')).toBeInTheDocument();
  });

  test('prevents moves after game is won', () => {
    // X wins with top row
    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-3')); // O
    fireEvent.click(screen.getByTestId('cell-1')); // X
    fireEvent.click(screen.getByTestId('cell-4')); // O
    fireEvent.click(screen.getByTestId('cell-2')); // X wins
    
    // Try to make another move
    const cell5 = screen.getByTestId('cell-5');
    fireEvent.click(cell5);
    
    // Cell should remain empty
    expect(cell5).toHaveTextContent('');
    expect(screen.getByText('🎉 Speler X heeft gewonnen!')).toBeInTheDocument();
  });
});
