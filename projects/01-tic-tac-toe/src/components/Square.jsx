
// This component will be used to render each square of the Tic-Tac-Toe board.
export const Square = ({children, isSelected ,updateBoard, index}) => {
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