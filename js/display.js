import Experience from "./experience.js";

export default class Display {
    constructor() {
        this.experience = new Experience();
        this.board = this.experience.board;

        this.ctx = this.experience.canvas.getContext("2d");

        this.setGrid()
        this.animate()
    }

    setGrid() {
        const g = this.experience.gridSnap
        const w = this.experience.sizes.width
        const h = this.experience.sizes.height
        this.ctx.strokeStyle = "gray"
        this.ctx.lineWidth = 1;

        for(let x = 0; x < this.board.width * g; x++) {
            this.ctx.beginPath()
            this.ctx.moveTo((x/this.board.width)*this.experience.sizes.width,0)
            this.ctx.lineTo((x/this.board.width)*this.experience.sizes.width,h)
            console.log(x)
            this.ctx.stroke()
        }

        for(let y = 0; y < this.board.height * g; y++) {
            this.ctx.beginPath()
            this.ctx.moveTo(0,(y/this.board.height)*this.experience.sizes.height)
            this.ctx.lineTo(w,(y/this.board.height)*this.experience.sizes.height)
            console.log(y)
            this.ctx.stroke()
        }
        this.ctx.strokeStyle = "white"
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        const points = this.board.points
        const gridWrap = document.getElementById("pvOut")

        this.ctx.clearRect(0,0, this.experience.sizes.width, this.experience.sizes.height)
        gridWrap.innerHTML = ""
        this.setGrid()

        for (let i = 0; i < points.length; i++) {
            const x = (points[i].x/this.board.width)*this.experience.sizes.width;
            const y = (points[i].y/this.board.height)*this.experience.sizes.height;

            const newPoint = document.createElement("div")
            newPoint.classList.add("point")
            newPoint.style.left = `${x}px`
            newPoint.style.top = `${y}px`
            newPoint.innerHTML = i+1;
            gridWrap.appendChild(newPoint)

            if (i > 0) {
                const x2 = (points[i-1].x/this.board.width)*this.experience.sizes.width;
                const y2 = (points[i-1].y/this.board.height)*this.experience.sizes.height;

                this.ctx.lineWidth = 2;
                this.ctx.strokeStyle = "white";

                this.ctx.beginPath()
                this.ctx.moveTo(x, y);
                this.ctx.lineTo(x2, y2);
                this.ctx.stroke();
            }
        }
    }
}