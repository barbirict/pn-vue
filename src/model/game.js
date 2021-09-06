export default class game {
    constructor(newGame) {
        let {title, year, genre, description, price} = newGame
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.price = price;
    }
}