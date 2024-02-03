import Experience from "./experience.js";

export default class Display {
    constructor() {
        this.experience = new Experience();
        this.board = this.experience.board;

        this.width = this.experience.sizes.width;
        this.height = this.experience.sizes.height;

        this.ctx = this.experience.canvas.getContext("2d");

        this.animate()
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const points = this.board.points

        for (let i = 0; i < points.length; i++) {
            const x = (points[i].x/this.board.width)*this.experience.sizes.width;
            const y = (points[i].y/this.board.height)*this.experience.sizes.height;
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