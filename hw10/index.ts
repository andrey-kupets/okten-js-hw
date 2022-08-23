console.log(2);
class Rectangle {
    private _width;
    private _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    public get width() {
        return this._width;
    }

    
    public set width(w) {

        if (w < 0) {
            this._width = 1;
            return;
        }

        this._width = w;
    }
}

const rect = new Rectangle(2,5);
rect.width = -6;
console.log(rect);