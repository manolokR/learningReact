// Importing necessary modules from React. 'useState' is a hook used to manage state in functional components.
// 'Children' is a utility from React that provides methods to deal with this.props.children.
import { Children, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS} from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

// Main App component, which will hold the entire game logic and UI.
function App() {

  const [board,setBoard] = useState(Array(9).fill(null))

  console.log(board)

  const [turn, setTurn] = useState(TURNS.X)
  //Null if there is no winner, false if there is a draw.
  const[winner,setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {

    //Check if there are any empty squares left.
    return newBoard.every((square) => square != null)

  }

  const updateBoard = (index) => {
    
    //If the square is already filled, we should not update the board.
    if(board[index] || winner) return

    //We need to create a new array to update the board state. Props are immutable.
    const newBoard = [...board]
    newBoard[index] = turn //X or O
    setBoard(newBoard)

    //Change the turn
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Check if there is a winner
    //We check the winner after the board is updated (that's why we have to send newBoard)
    // because of the asynchronous nature of the setBoard function.
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      //Setting the state is asynchronous.
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) //Draw
    }

  }

  return (
    <main className='board'>

      <h1>Tic tac toe</h1>
      <button className ='button' onClick={resetGame}> Reset game </button>
      <section className='game'>
        {
          board.map((square, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }

      </section>

      <section  className='turn'>
        
        <Square isSelected={turn == TURNS.X}>  {TURNS.X} </Square>
        <Square isSelected={turn == TURNS.O}>  {TURNS.O} </Square>
      </section>    +

      <WinnerModal resetGame={resetGame} winner={winner}/>
    
    </main>

   


     
  )

}

export default App
