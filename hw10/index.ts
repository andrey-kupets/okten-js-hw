class Rectangle {
    private _width: Number;
    private _height: Number;

    constructor(w: Number, h: Number) {
        this._width = w;
        this._height = h;
    }

    public get width() {
        return this._width;
    }

    public set width(w: Number) {

        if (w < 0) {
            this._width = 1;
            return;
        }

        this._width = w;
    }
}

const rect = new Rectangle(2,5);
const rectWidth = rect.width;
console.log(rectWidth);

rect.width = -10;

console.log(rect);
