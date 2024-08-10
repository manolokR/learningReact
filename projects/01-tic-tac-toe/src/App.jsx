// Importing necessary modules from React. 'useState' is a hook used to manage state in functional components.
// 'Children' is a utility from React that provides methods to deal with this.props.children.
import { Children, useState } from 'react'
import './App.css'

const TURNS={
  X: 'x',
  O: 'o',

}


// This component will be used to render each square of the Tic-Tac-Toe board.
const Square = ({children, isSelected ,updateBoard, index}) => {
  // Dynamically set the class name based on whether the square is selected.
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {

      updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
        {children}
    </div>
  )

}


// This array will hold all the possible winning combinations in the game.
const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


// Main App component, which will hold the entire game logic and UI.
function App() {

  const [board,setBoard] = useState(Array(9).fill(null))

  console.log(board)

  const [turn, setTurn] = useState(TURNS.X)
  //Null if there is no winner, false if there is a draw.
  const[winner,setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {

    //Iterate over all the possible winning combinations.
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo

      //Check if the squares are filled and if they are the same.
      if(boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]){
        return boardToCheck[a]
      }
    }

    //If there is no winner, we should check if the game is a draw.
    return null


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
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }

  }

  return (
    <main className='board'>

      <h1>Tic tac toe</h1>

      <section className='game'>
        {
          board.map((_, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>

      <section  className='turn'>
        
        <Square isSelected={turn == TURNS.X}>  {TURNS.X} </Square>
        <Square isSelected={turn == TURNS.O}>  {TURNS.O} </Square>
      </section>    

    </main>


  )

}

export default App
