module Geometry {
    export interface Vector2DInterface {
        toArray(callback : (x : number[]) => void) : void;
        length() : number;
        normalize();
    }
    export class Vector2D implements Vector2DInterface {
        private _x : number;
        private _y : number;
        constructor(x : number, y : number) {
            this._x = x;
            this._y = y;
        }
        toArray(callback : (x : number[]) => void) : void {
            callback([this._x, this._y]);
        }
        length() : number {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
        normalize() {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }
    }
}