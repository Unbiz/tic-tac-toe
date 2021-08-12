class TicTacToe {
    constructor() {
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayerSymbol = 'x';
        this.status = 'game';

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null) return;
        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        const isWinCol = this.field.every((item) => item[columnIndex] === this.currentPlayerSymbol);
        const isWinRow = this.field[rowIndex].every((item) => item === this.currentPlayerSymbol);
        const isWinLeftD = this.field[0][0] === this.currentPlayerSymbol && this.field[1][1] === this.currentPlayerSymbol && this.field[2][2] === this.currentPlayerSymbol;
        const isWinRightD = this.field[0][2] === this.currentPlayerSymbol && this.field[1][1] === this.currentPlayerSymbol && this.field[2][0] === this.currentPlayerSymbol;
        if (isWinCol || isWinRow || isWinLeftD || isWinRightD) this.status = this.currentPlayerSymbol === 'x' ? 'x-win' : 'o-win';
        this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
    }

    isFinished() {
        if (this.status === 'x-win' || this.status === 'o-win') return true;
        if (this.field.flat().every(item => item !== null)) return true;
        return false;
    }

    getWinner() {
        if (this.status === 'x-win') return 'x';
        if (this.status === 'o-win') return 'o';
        return null;
    }

    noMoreTurns() {
        return this.field.flat().every(item => item !== null);
    }

    isDraw() {
        const isTurn = this.field.flat().every(item => item !== null);
        const isWinner = this.status === 'game' ? true : false;
        return isTurn && isWinner;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] !== undefined) return this.field[rowIndex][colIndex];
        return null;
    }
}

module.exports = TicTacToe;
