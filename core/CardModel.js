export default class CardModel {
    constructor (row, column, type, player){
        this.id = row + column;
        this.row = row;
        this.column = column;
        this.type = type;
        this.player = player;
    }
}