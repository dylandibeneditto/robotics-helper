import Experience from "./experience.js";
import Point from "./points.js"

export default class Mouse {
    constructor() {
        this.experience = new Experience();
        this.board = this.experience.board
        this.bw = this.board.width;
        this.bh = this.board.height;

        this.experience.canvas.addEventListener("mousedown", (e)=> {
            this.board.add(new Point((e.offsetX/this.experience.sizes.width)*this.board.width,(e.offsetY/this.experience.sizes.height)*this.board.height))
            this.experience.updateOut();
        })
    }
}