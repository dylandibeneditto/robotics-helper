import Size from "./utils/size.js";

import Board from "./board.js"
import Point from "./points.js"
import Mouse from "./mouse.js"
import Display from "./display.js";
import Solver from "./solver.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this;

        this.canvas = canvas

        this.sizes = new Size()
        this.sizes.resize();

        this.board = new Board(10, 10);

        this.solver = new Solver();

        this.mouse = new Mouse()

        this.display = new Display(this.canvas);
    }

    updateOut() {
        const m = document.getElementById("mOut")
        m.innerHTML = ""
        const newEl = document.createElement("div")
        newEl.innerHTML = this.solver.navigate().join("<br>")
        m.appendChild(newEl);

        const p = document.getElementById("pOut")
        p.innerHTML = ""
        this.board.points.forEach((item, index)=> {
            p.innerHTML += `<div class='pointItem' id="p${index}"><div>x: ${Math.round(item.x*10)/10}</div> <div>y: ${Math.round(item.y*10)/10}</div> <div></div> <div class='remove'>-</div> </div>`
        })

        Array.from(document.getElementsByClassName("remove")).forEach((item)=> {
            item.addEventListener("mousedown", (e)=> {
                this.board.remove(parseInt(e.target.parentElement.id))
                this.updateOut()
            })
        })
    }
}