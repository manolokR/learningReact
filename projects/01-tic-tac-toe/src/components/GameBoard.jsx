import {Square} from "./Square.jsx";
export function GameBoard({updateBoard, board}) {
    return (


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
    )


}
