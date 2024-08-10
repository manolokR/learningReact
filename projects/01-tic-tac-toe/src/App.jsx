// Importing necessary modules from React. 'useState' is a hook used to manage state in functional components.
// 'Children' is a utility from React that provides methods to deal with this.props.children.
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS} from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { GameBoard } from './components/GameBoard.jsx'
import { Turn } from './components/Turn.jsx'
import { resetGameStorage, saveGameStorage } from './logic/storage/index.js'

// Main App component, which will hold the entire game logic and UI.
function App() {

  //UseState will never be inside a loop or a conditional statement.
  const [board,setBoard] = useState(() =>{
    //We check if there is a board in the local storage. If there is, we parse it. If not, we create a new array.
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)


  })

  console.log(board)

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })

  //Null if there is no winner, false if there is a draw.
  const[winner,setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
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

    //Save game state
    saveGameStorage({board:newBoard, turn:newTurn})
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
     
      <GameBoard board={board} updateBoard={updateBoard}/>
  +
      <Turn turn={turn}/>
     
      <WinnerModal resetGame={resetGame} winner={winner}/>
    
    </main>

   


     
  )

}

export default App
