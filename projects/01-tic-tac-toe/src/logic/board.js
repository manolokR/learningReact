import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {

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

  export const checkEndGame = (newBoard) => {

    //Check if there are any empty squares left.
    return newBoard.every((square) => square != null)

  }