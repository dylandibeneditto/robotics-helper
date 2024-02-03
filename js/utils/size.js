import Experience from "../experience.js";

export default class Size {
    constructor() {
        this.experience = new Experience();

        this.vmin = Math.min(window.innerWidth, window.innerHeight)/100
        this.width = (60*this.vmin);
        this.height = (60*this.vmin);
        window.addEventListener("resize", (e)=> {
            this.resize()
        })
    }

    resize() {
        this.vmin = Math.min(window.innerWidth, window.innerHeight)/100;
        this.width = (60*this.vmin)+2;
        this.height = (60*this.vmin)+2;

        this.experience.canvas.width = this.width;
        this.experience.canvas.height = this.height;
    }
}