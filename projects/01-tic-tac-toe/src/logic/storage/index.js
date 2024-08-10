export const saveGameStorage = ({board, turn}) => {
//We use JSON.stringify to convert the array to a string.
window.localStorage.setItem('board', JSON.stringify(board))
window.localStorage.setItem('turn',turn)

}


export const resetGameStorage = () => {

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

}