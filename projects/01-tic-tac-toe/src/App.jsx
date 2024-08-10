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

// Main App component, which will hold the entire game logic and UI.
function App() {

  const [board,setBoard] = useState(Array(9).fill(null))

  console.log(board)

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn //X or O
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
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
