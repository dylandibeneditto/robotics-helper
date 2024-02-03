export default class Board {
    constructor(w, h) {
        this.width = w
        this.height = h

        this.points = []
    }

    remove(index) {
        this.points.splice(index, 1)
    }

    insert(index, point) {
        this.points.splice(index, 0, point)
    }

    add(point) {
        this.points.push(point)
    }
}