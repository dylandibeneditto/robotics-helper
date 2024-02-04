import Experience from "./experience.js";
import Point from "./points.js"

export default class Mouse {
    constructor() {
        this.experience = new Experience();
        this.board = this.experience.board

        this.experience.canvas.addEventListener("mousedown", (e)=> {
            let x,y;
            if(this.experience.gridSnap==0) {
                x = ((e.offsetX/this.experience.sizes.width)*this.board.width)
                y = ((e.offsetY/this.experience.sizes.height)*this.board.height)
            } else {
                x = Math.round(((e.offsetX/this.experience.sizes.width)*this.board.width)*this.experience.gridSnap)/this.experience.gridSnap
                y = Math.round(((e.offsetY/this.experience.sizes.height)*this.board.height)*this.experience.gridSnap)/this.experience.gridSnap
            }
            this.board.add(new Point(x,y))
            this.experience.updateOut();
        })


    }
}