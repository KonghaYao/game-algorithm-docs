import { Graphics } from "pixi.js";
const basicDraw = (x = 0, y = 0, color = 0xffffff, callback: Function) => {
    let basic = new Graphics();
    basic.beginFill(color);
    callback(basic);
    basic.endFill();
    basic.position.set(x, y);
    return basic;
};
export const createBall = (
    x = 0,
    y = 0,
    radius = 1,
    color = 0xffffff,
    scale = 1
) => {
    return basicDraw(x, y, color, (basic: Graphics) =>
        basic.drawCircle(0, 0, radius * 10 * scale)
    );
};
export const createRect = (x = 0, y = 0, color = 0xffffff, scale = 1) => {
    return basicDraw(x, y, color, (basic: Graphics) =>
        basic.drawRect(0, 0, 10 * scale, 10 * scale)
    );
};
