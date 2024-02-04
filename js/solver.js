import Experience from "./experience.js";

export default class Solver {
    constructor() {
        this.experience = new Experience();
        this.board = this.experience.board
    }

    navigate() {
        console.log(this.board.points)
        if(this.board.points.length>1) {
            this.x = this.board.points[0].x;
            this.y = this.board.points[0].y;
            this.rot = -90;

            let result = [];

            for(let i = 1; i < this.board.points.length; i++) {
                const p = this.board.points[i]
                const angle = this.calcAngle(this.x, this.y, p.x, p.y)
                const distance = this.calcDistance(this.x, this.y, p.x, p.y);
    
                let angleToTurn = angle - this.rot;
    
                angleToTurn = ((angleToTurn + 180) % 360) - 180;
    
                result.push(`turn(${angleToTurn})`)
                result.push(`forward(${distance})`)
    
                this.x = p.x;
                this.y = p.y;
                this.rot = angle
            }
    
            return result
        }
    }

    calcAngle(x1,y1,x2,y2) {
        return ((Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI)
    }

    calcDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2))
    }
}