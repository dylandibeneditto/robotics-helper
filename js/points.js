import Experience from "./experience.js";

export default class Point {
    constructor(x,y) {
        this.experience = new Experience();
        this.board = this.experience.board;

        this.x = x;
        this.y = y;
    }
}